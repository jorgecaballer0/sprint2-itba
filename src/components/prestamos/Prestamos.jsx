import React from "react";
import FormPrestamos from "./formPrestamos";
import TablaPrestamos from "./tablaPrestamos";

const Prestamos = () => {
  return (
    <>
      <h1 className="title-seccion">Simulador de préstamos</h1>
      <FormPrestamos />
      <TablaPrestamos />
    </>
  );
};

export default Prestamos;
