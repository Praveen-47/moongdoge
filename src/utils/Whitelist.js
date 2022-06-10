const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const addresses = [
  "0xD95aa96C0e04F1a37F41F3f9CE7C00038Dce7fef",
  "0xC8aF10715E333fbB133dD2094bCFa3F324C59c85",
];

const leaves = addresses.map((x) => keccak256(x));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const buf2hex = (x) => "0x" + x.toString("hex");

console.log("root ===> ", buf2hex(tree.getRoot()));

function whiteList(address) {
  const leaf = keccak256(address); // address from wallet using walletconnect/metamask
  const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
  return proof;
}

export default whiteList;
