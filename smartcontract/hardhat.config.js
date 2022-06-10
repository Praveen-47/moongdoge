require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const accounts = process.env.PRIVATE_KEY;
const bssapi = process.env.BIAPI;
module.exports = {
  networks: {
    testnet: {
      url: `https://speedy-nodes-nyc.moralis.io/03abd1710870a3f8acc90564/bsc/testnet`,
      accounts: [accounts],
    },
    // mainnet: {
    //   url: `https://bsc-dataseed.binance.org/`,
    //   accounts: accounts,
    // },
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: bssapi,
  },
  solidity: "0.8.4",
};
