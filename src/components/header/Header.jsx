import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-orange-400 w-screen fixed top-0">
        {/* mover logo a ml-80 con sidebar abierta */}
        <div className="w-24 h-20 ml-24">
          <img src={Logo} alt="LOGO ITBANK" />
        </div>
      </nav>
    </>
  );
};

export default Header;
