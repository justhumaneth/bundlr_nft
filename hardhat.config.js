
require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: './.env' });
require('hardhat-deploy');
require('@nomiclabs/hardhat-ethers');

const defaultNetwork = 'rinkeby';

module.exports = {
  solidity: '0.8.9',
  defaultNetwork,

  networks: {
    localhost: {
      chainId: 31337,
    },

    rinkeby: {
      chainId: 4,
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
    tokenOwner: 1,
  },
};
