import React from "react";

const Cuentas = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="bg-orange-400 w-80 m-5 rounded-lg text-xl text-orange-900 ">
          <h5 className="font-bold ml-2 mt-2">Cuenta</h5>
          <div className="m-5 mt-0">
            <ul className="text-orange-100 ml-5">
              <li>nombre</li>
              <li>tipo de cuenta</li>
              <li>saldo</li>
              <li>cbu</li>
              <li>alias</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-orange-400 w-80 rounded-lg text-xl text-orange-900">
          <h5 className="font-bold ml-2 mt-2">Tarjetas</h5>
          <div className="m-5 mt-0">
            <ul className="text-orange-100 ml-3">
              <li>tipo de tarjeta</li>
              <li>numero de tarjeta</li>
              <li>titular</li>
              <li>vencimiento</li>
              <li>codigo de seguridad</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuentas;
