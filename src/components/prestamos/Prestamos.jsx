import React, { useState } from "react";
import FormPrestamos from "./formPrestamos";
import TablaPrestamos from "./tablaPrestamos";

const Prestamos = () => {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");

  return (
    <>
      <h1 className="flex justify-center my-6 text-4xl">
        Simulador de préstamos
      </h1>
      <FormPrestamos
        cantidad={cantidad}
        setCantidad={setCantidad}
        plazo={plazo}
        setPlazo={setPlazo}
      />
      <TablaPrestamos />
    </>
  );
};

export default Prestamos;
