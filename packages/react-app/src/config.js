import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = 
"0xe728164cF7598365De99850FD89d3C03A46c2190"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/pCHkhyzgFN4WnFDdcRDnxZB58l40HdFS",
  },
};