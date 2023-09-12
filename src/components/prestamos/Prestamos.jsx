import React, { useState } from "react";
import FormPrestamos from "./formPrestamos";
import Resultado from "./Resultado";

const Prestamos = () => {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

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
        setTotal={setTotal}
      />
      {total === 0 ? (
        <p className="font-semibold text-md my-2 text-center">
          Ingrese una cantidad y un plazo para cotizar
        </p>
      ) : (
        <Resultado total={total} cantidad={cantidad} plazo={plazo} />
      )}
    </>
  );
};

export default Prestamos;
