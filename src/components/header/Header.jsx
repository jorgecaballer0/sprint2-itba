import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-orange-400   w-screen">
        <div className="w-24 h-20 ml-24">
          <img src={Logo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Header;
