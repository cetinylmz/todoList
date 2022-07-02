import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function index(props) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow bg-[#f1f1f1]">{props.children}</div>
        <Footer />
      </div>
    </>
  );
}

export default index;
