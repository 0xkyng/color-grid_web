// import '@rainbow-me/rainbowkit/styles.css'
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
// import * as React from 'react'
// import * as ReactDOM from 'react-dom/client'
// import App from "./App.jsx";
// import { WagmiConfig } from 'wagmi'

// // import { chains, config } from './wagmi.js'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <WagmiConfig config={config}>
//       <RainbowKitProvider chains={chains}>
//         <App />
//       </RainbowKitProvider>
//     </WagmiConfig>
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
