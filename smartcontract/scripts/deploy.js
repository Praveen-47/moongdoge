// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const RunningMan = await hre.ethers.getContractFactory("RunningMan");
  const runningMan = await RunningMan.deploy();

  await runningMan.deployed();

  console.log("runningMan deployed to:", runningMan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
