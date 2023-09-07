import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";
import Registro from "./components/inicio/Registro";
import Inicio from "./components/inicio/Inicio_sesion";

function App() {
  return (
    <>
      <Inicio />
      <hr className="m-2" />
      <Registro />
      <hr className="m-2" />
      <Conversor />
      <hr className="m-2" />
      <Prestamos />
    </>
  );
}

export default App;
