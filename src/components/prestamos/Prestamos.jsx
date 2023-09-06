import React from "react";
import FormPrestamos from "./formPrestamos";
import TablaPrestamos from "./tablaPrestamos";

const Prestamos = () => {
  return (
    <>
      <h1 className="flex justify-center my-6 text-4xl">Simulador de préstamos</h1>
      <FormPrestamos />
      <TablaPrestamos />
    </>
  );
};

export default Prestamos;
