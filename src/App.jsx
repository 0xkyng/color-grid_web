import { WagmiConfig, createConfig, configureChains, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { infuraProvider } from "wagmi/providers/infura";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing";
import CellBoard from "./cellboard";
import { goerli } from "viem/chains";


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [
    infuraProvider({
      apiKey: "bf5e0f514be446d591637dc64d6a8d89",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "cellboard",
  projectId: "d13e1447118d4b47d6b1174a459884d7",
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/cells" element={<CellBoard/>} />
        </Routes>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;