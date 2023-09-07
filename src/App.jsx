import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";
import Registro from "./components/inicio/Registro";
import Inicio from "./components/inicio/Inicio_sesion";


function App() {
  return (
    <>
      <Inicio />
      <Registro />
      <Conversor />
      <hr className="mt-2" />
      <Prestamos />
    </>
  );
}

export default App;
