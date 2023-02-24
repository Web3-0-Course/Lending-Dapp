require('@nomicfoundation/hardhat-network-helpers');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
const API = process.env.API_URL
const ACCOUNT = process.env.PRIVATE_KEYS

module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      accounts: ['0x0']
    },
    mumbai : {
      url: API, 
      accounts : [`0x${ACCOUNT}`] 
    }
  }
};
