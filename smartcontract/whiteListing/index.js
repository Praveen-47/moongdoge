const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const addresses = [
  "0xD95aa96C0e04F1a37F41F3f9CE7C00038Dce7fef",
  "0xeD2C856c41899E89fa9Cdefc8c4Ce3dF85671D23",
  "0xBaeAe29E7457F1E69698449a3ff983cAd28A3a75",
  "0x47ee7910969B31BF02d8217b042233B8F1b5423D",
  "0x2D3b5984c56f2dd328f9e4d467289000a4d163DE",
];

const leaves = addresses.map((x) => keccak256(x));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const buf2hex = (x) => "0x" + x.toString("hex");
let proof;

console.log("Root===>", buf2hex(tree.getRoot()));

const leaf = keccak256("0xeD2C856c41899E89fa9Cdefc8c4Ce3dF85671D23"); // address from wallet using walletconnect/metamask
proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
console.log("proof===>", proof);
