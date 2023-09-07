import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";
import Header from "./components/header/Header";
import Inicio from "./components/inicio/Inicio";
import Footer from "./components/footer/Footer";
import Pagos from "./components/pagos/Pagos"
import Transferencias from "./components/transferencias/Transferencias"
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
      <Transferencias />
      <Pagos />
      <Footer/>
    </>
  );
}

export default App;
