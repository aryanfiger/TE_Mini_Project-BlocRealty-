// BlockchainContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import BlockRealtyABI from './BlockRealtyABI.json'; // Your contract ABI

const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const contractAddress = "YOUR_CONTRACT_ADDRESS";

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          
          const accounts = await web3Instance.eth.getAccounts();
          const contractInstance = new web3Instance.eth.Contract(
            BlockRealtyABI,
            contractAddress
          );
          
          setWeb3(web3Instance);
          setAccount(accounts[0]);
          setContract(contractInstance);
          setIsLoading(false);
          
          // Listen for account changes
          window.ethereum.on('accountsChanged', (newAccounts) => {
            setAccount(newAccounts[0] || '');
          });
        } catch (error) {
          console.error("Error initializing Web3:", error);
        }
      } else {
        console.log("Please install MetaMask!");
      }
    };
    
    init();
  }, []);

  return (
    <BlockchainContext.Provider value={{ web3, account, contract, isLoading }}>
      {children}
    </BlockchainContext.Provider>
  );
};

export const useBlockchain = () => useContext(BlockchainContext);