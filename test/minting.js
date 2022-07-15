require('dotenv').config();
const ethers = require('ethers');

// Get Infura App URL
const API_KEY = process.env.API_KEY;

// Define an Infura Provider
const provider = new ethers.providers.InfuraProvider('rinkeby', API_KEY)

// Get contract ABI file
const contract = require("../artifacts/contracts/NFT.sol/NFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0x3A72D7c87422160A86a455D2c2E56B2045e1a474'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Call mintNFT function
const mint = async () => {
    let nftTxn = await myNftContract.mint(signer.address)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`)
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

