import React from "react";
import data from "../../utils/datos.json";

const Cuentas = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-6 sm:flex-col">
        <div className="flex justify-center">
          <div className="bg-orange-400 w-96 m-5 rounded-lg text-xl text-orange-900 sm:w-80">
            <h5 className="font-bold ml-3 mt-2">Cuenta</h5>
            <div className="m-5 mt-0">
              <ul className="text-orange-100 ml-5">
                <li>
                  <span className="font-bold"> Titular:</span> {data[0].nombre}
                </li>
                <li>{data[0].tipo_de_cuenta}</li>
                <li>
                  {" "}
                  <span className="font-bold"> Saldo:</span> {data[0].saldo}
                </li>
                <li>
                  {" "}
                  <span className="font-bold"> C.B.U:</span> {data[0].cbu}
                </li>
                <li>
                  <span className="font-bold"> Alias:</span> {data[0].alias}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-orange-400 w-96 rounded-lg text-xl text-orange-900 sm:w-80">
            <h5 className="font-bold ml-3 mt-2">Tarjetas</h5>
            <div className="m-5 mt-0">
              <ul className="text-orange-100 ml-3">
                <li>{data[0].datos_tarjeta.tipo_de_tarjeta}</li>
                <li>
                  <span className="font-bold"> N° de tarjeta:</span>{" "}
                  {data[0].datos_tarjeta.numero_de_tarjeta}
                </li>
                <li>
                  <span className="font-bold"> Titular:</span>{" "}
                  {data[0].datos_tarjeta.titular}
                </li>
                <li>
                  <span className="font-bold"> Vencimiento:</span>{" "}
                  {data[0].datos_tarjeta.vencimiento}
                </li>
                <li>
                  <span className="font-bold"> Código de seguridad:</span>{" "}
                  {data[0].datos_tarjeta.codigo_de_seguridad}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuentas;
