import React, { useState } from "react";
import Banner from "../../assets/images/banner.png";
import BannerA from "../../assets/images/bannerA.png";
import BannerB from "../../assets/images/bannerB.png";
import { Link } from "react-router-dom";
import data from "../../utils/datos.json";
import { AiOutlineEye } from "react-icons/ai";

const Inicio = () => {
  const [mostrarNum, setMostrarNum] = useState(true);
  return (
    <>
      <section>
        <h1 className="flex justify-center font-bold text-4xl text-blue-600 sm:text-2xl mt-6 mb-0">
          Hola,{data[0].nombre}!
        </h1>
        <div className="flex justify-center sm:flex-col items-center gap-8 sm:gap-1 mb-10">
          <div className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]">
            <h5 className="font-bold ml-2">Cuentas</h5>
            <p className="text-orange-100 ml-3">{data[0].tipo_de_cuenta}</p>
            <p className="text-orange-100 ml-5">{data[0].saldo}</p>
            <Link
              to={"/cuenta"}
              className="flex justify-center hover:text-white transition-colors"
            >
              Ver todo
            </Link>
          </div>

          <div className="bg-orange-400 w-80 rounded-md text-xl text-orange-900 my-4 min-h-[8rem]">
            <h5 className="font-bold ml-2">Tarjetas</h5>
            <div>
              <p className="text-orange-100 ml-3">Número de tarjeta</p>
              <div className="flex items-center justify-between">
                {mostrarNum ? (
                  <p className="text-white ml-5">*** *** ***</p>
                ) : (
                  <p className="text-orange-100 ml-5">
                    {data[0].datos_tarjeta.numero_de_tarjeta}
                  </p>
                )}
                <button
                  type="button"
                  className="text-orange-900 text-center mx-6"
                  onClick={() => {
                    setMostrarNum(!mostrarNum);
                  }}
                >
                  <AiOutlineEye className="text-orange-700 hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-20">
          <div className="w-80 sm:hidden">
            <img src={BannerA} alt="" />
          </div>
          <div className="w-80 items-center sm:w-[65%] mb-2 mt-0">
            <img src={Banner} alt="" />
          </div>
          <div className="w-80 sm:hidden">
            <img src={BannerB} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
