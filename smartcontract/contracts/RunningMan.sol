// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// https://testnet.bscscan.com/address/0xEb8D986f2ea814ecc6bE9051a500E1797072a330#code

//https://testnet.bscscan.com/address/0x969dbd325D4aF9454e6e786A1FA0a0D6bE0b3197#code

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract RunningMan is ERC721Enumerable {
    using Strings for uint256;
    using SafeMath for uint;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public owner;

    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant MAX_PUBLIC_MINT = 10;
    uint256 public constant MAX_WHITELIST_MINT = 10;
    uint256 public constant WHITELIST_MINT = 200;
    uint256 public constant FREE_MINT = 800;
    uint256 public PUBLIC_SALE_PRICE = 0.5 ether;
    uint256 public WHITELIST_SALE_PRICE = 0.2 ether;

    string public baseTokenUri;
    string public placeholderTokenUri;

    bool public isRevealed = false;
    bool public publicSale = false;
    bool public whiteListSale = false;
    bool public pause = true;
    bool public teamMinted;

    bytes32 private merkleRoot;

    mapping(address => uint256) public totalPublicMint;
    mapping(address => uint256) public totalWhitelistMint;

    constructor() ERC721("RunningMan", "RngMan") {
        owner = msg.sender;
    }

    modifier callerIsUser() {
        require(
            tx.origin == msg.sender,
            "TPC :: Cannot be called by a contract"
        );
        _;
    }
    modifier OnlyOwner() {
        require(owner == msg.sender, "You are not the owner");
        _;
    }

    function freeMint(uint256 _quantity) public callerIsUser {
        //First  NFTs for free
        uint256 supply = totalSupply();
        require(pause == false, "Sale is paused");
        require(
            (totalSupply() + _quantity) <= FREE_MINT,
            "TITOWN :: Beyond Max Supply"
        );
        require(
            (totalPublicMint[msg.sender] + _quantity) < 1,
            "TITOWN :: Already minted 16 times!"
        );
        totalPublicMint[msg.sender] += _quantity;
        for (uint256 i = 1; i <= _quantity; i++) {
            _safeMint(msg.sender, supply + i);
        }
        // _safeMint(msg.sender, _quantity);
    }

    function mint(uint256 _quantity) external payable callerIsUser {
        uint256 supply = totalSupply();

        require(publicSale, "TPC :: Not Yet Active.");
        require(
            (totalSupply() + _quantity) <= WHITELIST_MINT,
            "TPC :: Beyond Max Supply"
        );
        require(
            (totalPublicMint[msg.sender] + _quantity) <= MAX_PUBLIC_MINT,
            "TPC :: Already minted 3 times!"
        );
        require(msg.value >= (PUBLIC_SALE_PRICE * _quantity), "TPC :: Below ");

        totalPublicMint[msg.sender] += _quantity;
        totalPublicMint[msg.sender] += _quantity;
        for (uint256 i = 1; i <= _quantity; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    function whitelistMint(bytes32[] memory _merkleProof, uint256 _quantity)
        external
        payable
        callerIsUser
    {
        uint256 supply = totalSupply();
        require(whiteListSale, "TPC :: Minting is on Pause");
        require(
            (totalSupply() + _quantity) <= WHITELIST_MINT,
            "TPC :: Cannot mint beyond max supply"
        );
        require(
            (totalWhitelistMint[msg.sender] + _quantity) <= MAX_WHITELIST_MINT,
            "TPC :: Cannot mint beyond whitelist max mint!"
        );
        require(
            msg.value >= (WHITELIST_SALE_PRICE * _quantity),
            "TPC :: Payment is below the price"
        );
        //create leaf node
        bytes32 sender = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, sender),
            "TPC :: You are not whitelisted"
        );

        totalWhitelistMint[msg.sender] += _quantity;
        for (uint256 i = 1; i <= _quantity; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    function teamMint(uint256 _nfts) external OnlyOwner {
        uint256 supply = totalSupply();
        require(!teamMinted, "TPC :: Team already minted");
        teamMinted = true;
        for (uint256 i = 1; i <= _nfts; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenUri;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        uint256 trueId = tokenId + 1;

        if (!isRevealed) {
            return placeholderTokenUri;
        }
        return
            bytes(baseTokenUri).length > 0
                ? string(
                    abi.encodePacked(baseTokenUri, trueId.toString(), ".json")
                )
                : "";
    }

    function setTokenUri(string memory _baseTokenUri) external OnlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function setPlaceHolderUri(string memory _placeholderTokenUri)
        external
        OnlyOwner
    {
        placeholderTokenUri = _placeholderTokenUri;
    }

    function setMerkleRoot(bytes32 _merkleRoot) external OnlyOwner {
        merkleRoot = _merkleRoot;
    }

    function getMerkleRoot() external view returns (bytes32) {
        return merkleRoot;
    }

    function togglePause() external OnlyOwner {
        pause = !pause;
    }

    function toggleWhiteListSale() external OnlyOwner {
        whiteListSale = !whiteListSale;
    }

    function togglePublicSale() external OnlyOwner {
        publicSale = !publicSale;
    }

    function toggleReveal() external OnlyOwner {
        isRevealed = !isRevealed;
    }

    function transferOwner(address _to) public OnlyOwner {
        owner = _to;
    }

    function withdraw() external OnlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
