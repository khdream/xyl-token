"use client";
import { useState, useEffect } from "react";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";
import Image from "next/image";

export default function Home() {
  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  // Web3 state
  const { isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  // Update wallet address when connection changes
  useEffect(() => {
    const updateWalletAddress = async () => {
      if (isConnected && walletProvider) {
        try {
          const provider = new BrowserProvider(walletProvider);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setWalletAddress(address);
        } catch (error) {
          console.error("Error getting wallet address:", error);
        }
      } else {
        setWalletAddress("");
      }
    };

    updateWalletAddress();
  }, [isConnected, walletProvider]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = { fullName, email, walletAddress, investmentAmount };
  
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleWalletInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">XYL Token Pre-Order Registration</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Wallet Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={handleWalletInput}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter wallet address or connect wallet"
              required
            />
            <div className="flex justify-start">
              <div className="w3m-button-container">
                <w3m-button />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Investment Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Submit →
          </button>
        </form>

        <div className="mt-8 flex justify-center">
          <Image 
            src="/xyl.png" 
            alt="System Alert: Xylon is under construction" 
            className="max-w-full h-auto rounded-lg shadow-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>

      <style jsx global>{`
        .w3m-button-container {
          --w3m-button-height: 32px;  /* Default is 40px */
          --w3m-button-width: auto;
          --w3m-button-border-radius: 6px;
          --w3m-accent-color: #000000;
          --w3m-accent-fill-color: #FFFFFF;
          transform: scale(0.9);  /* Makes the button 90% of its original size */
        }
      `}</style>
    </main>
  );
}
