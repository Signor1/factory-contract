require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// URL form alchemy
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const POLYGON_URL = process.env.POLYGON_URL;
//private of the wallet
const KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${KEY}`],
    },
    mumbai: {
      url: POLYGON_URL,
      accounts: [`0x${KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    // apiKey: {
    //   polygonMumbai: `${process.env.POLYGONSCAN_API_KEY}`,
    // },
  },
};

export default config;

// Factory contract deployed to 0x8FFe9D46cd72F93DEf174FbE693D7a50eC918EA1
