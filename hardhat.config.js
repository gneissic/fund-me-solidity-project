require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
  const SEPOLIA_URL = "https://eth-sepolia.g.alchemy.com/v2/PFUaaX_ZOfk26RXMjRWer483-5W1x9tS"
  const SEPOLIA_PRIVATE_KEY = "1e66ae827d24e04911c7f66b955baf39986ecd70e31a9ede6d15fd3c9c880213"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.8",
  solidity:{
    compilers:[{version: "0.8.8"}, {version: "0.6.6"}],
  },
  defaultNetwork: "hardhat",
  networks:{
    sepolia:{
      url: SEPOLIA_URL,
      accounts:[SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
       blockConfirmation: 6
    }
  },
  namedAccounts:{
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
  },
  
  }
};
