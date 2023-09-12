import React from "react";

const Resultado = ({ total, cantidad, plazo }) => {
  return (
    <div className="flex flex-col items-center gap-2 m-4 py-4 px-6 border-blue-600 border-2 rounded-md">
      <h2 className="text-2xl uppercase underline font-semibold text-center">
        Resumen del préstamo
      </h2>
      <p className="font-medium text-md  text-center">
        La cantidad solicitada es:
        <span className="font-semibold"> $ {cantidad}</span>
      </p>
      <p className="font-medium text-md  text-center">
        A pagar en:
        <span className="font-semibold"> {plazo} meses</span>
      </p>
      <p className="font-medium text-md  text-center">
        El pago mensual será de:
        <span className="font-semibold"> $ {(total / plazo).toFixed(2)}</span>
      </p>
      <p className="font-medium text-lg border-2 p-3 border-orange-500 rounded-md text-center">
        Total a pagar:
        <span className="font-semibold"> $ {total.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default Resultado;
