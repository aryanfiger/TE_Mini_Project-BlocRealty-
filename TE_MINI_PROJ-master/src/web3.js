// import Web3 from 'web3';

// // Initialize Web3 with Infura provider
// const infuraProjectId = 'YOUR_INFURA_PROJECT_ID'; // Replace with your Infura Project ID
// const infuraEndpoint = `https://mainnet.infura.io/v3/${infuraProjectId}`;

// const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));

// // Alternatively, you can use MetaMask or any other Ethereum provider
// if (window.ethereum) {
//   web3 = new Web3(window.ethereum);
//   try {
//     await window.ethereum.enable(); // Request account access
//   } catch (error) {
//     console.error("User denied account access");
//   }
// } else {
//   console.log("Non-Ethereum browser detected. Consider installing MetaMask.");
// }

// export default web3;