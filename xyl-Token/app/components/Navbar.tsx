import React from "react";
import ConnectButton from "./Connect";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-black text-white p-2 flex flex-row">
      <div className="container mx-auto flex justify-end items-center">
        <ConnectButton />
      </div>
    </nav>
  );
}

export default Navbar;
