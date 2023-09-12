import React from "react";
import data from "../../utils/datos.json";

const Cuentas = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="bg-orange-400 w-80 m-5 rounded-lg text-xl text-orange-900 ">
          <h5 className="font-bold ml-2 mt-2">Cuenta</h5>
          <div className="m-5 mt-0">
            <ul className="text-orange-100 ml-5">
              <li>{data[0].nombre}</li>
              <li>{data[0].tipo_de_cuenta}</li>
              <li>{data[0].saldo}</li>
              <li>{data[0].cbu}</li>
              <li>{data[0].alias}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-orange-400 w-80 rounded-lg text-xl text-orange-900">
          <h5 className="font-bold ml-2 mt-2">Tarjetas</h5>
          <div className="m-5 mt-0">
            <ul className="text-orange-100 ml-3">
              <li>{data[0].datos_tarjeta.tipo_de_tarjeta}</li>
              <li>{data[0].datos_tarjeta.numero_de_tarjeta}</li>
              <li>{data[0].datos_tarjeta.titular}</li>
              <li>{data[0].datos_tarjeta.vencimiento}</li>
              <li>{data[0].datos_tarjeta.codigo_de_seguridad}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuentas;
