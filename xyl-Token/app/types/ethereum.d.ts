export interface RequestBody {
  chainId: number;
  signerAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenAmount: string;
}

export interface ChainConfig {
  factoryAddress: string;
  // Add other chain-specific properties as needed
}

export interface Chains {
  [key: number]: ChainConfig;
} 