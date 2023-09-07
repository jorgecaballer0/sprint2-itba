import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";
import Header from "./components/header/Header";
import Inicio from "./components/inicio/Inicio";
import Footer from "./components/footer/Footer";
// import Sidebar from "./components/sideBar/Sidebar";

function App() {
  return (
    <>
      <Header/>
      {/* <Sidebar/> */}
      <Inicio/>
      <Conversor />
      <hr className="mt-2" />
      <Prestamos />
      <Footer/>
    </>
  );
}

export default App;
