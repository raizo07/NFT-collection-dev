require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
  },
},
};





















// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config({ path: ".env" });

// const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

// const sepolia_PRIVATE_KEY = process.env.sepolia_PRIVATE_KEY;

// module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     sepolia: {
//       url: ALCHEMY_API_KEY_URL,
//       accounts: [sepolia_PRIVATE_KEY],
//     },
//   },
// };




