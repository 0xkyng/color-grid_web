
import boardImg from "./assets/img1.jpg"
import "../index.css"
import React, { useEffect, useRef, useState } from "react";
import { useAccount, useConnect, useEnsName, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useNavigate } from "react-router-dom";


const Landing = () => {
    const { address, isConnected } = useAccount();
    const navigate = useNavigate();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    });
    if (isConnected) {
      navigate("/cells");
}
return (
    <>
  {/* <!-- Hero --> */}
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
    {/* <!-- Grid --> */}
    <div>
   <nav className="absolute top-4 right-8"><ConnectButton/></nav>
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-cente">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl ">
        Chromatic Canvas
        </h1>
        <p className="mt-3 text-lg text-gray-800">
             A Smart Contract-Powered ColorGrid
        </p>
      </div>
      {/* <!-- End Col --> */}

      <div className="lg:col-span-4 mt-10 lg:mt-0 w-full">
        <img
          className="w-96 h-60 rounded-xl"
          src={boardImg}
          alt="Image Description"
        />
      </div>
      {/* <!-- End Col --> */}
    </div>
    </div>
    {/* <!-- End Grid -->
</div> */}
  </div>
  {/* <!-- End Hero --> */}
</>
)
}
export default Landing;
