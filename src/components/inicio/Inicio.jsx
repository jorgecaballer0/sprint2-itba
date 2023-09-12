import React from "react";
import Banner from "../../assets/images/banner.png";
import BannerA from "../../assets/images/bannerA.png";
import BannerB from "../../assets/images/bannerB.png";

import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <h1 className="flex justify-center font-bold text-4xl text-blue-600 ">
        Hola,user!
      </h1>
      <div className="flex justify-center">
        <div className="bg-orange-400 w-80 m-10 rounded-lg text-xl text-orange-900 ">
          <h5 className="font-bold ml-2">Cuentas</h5>
          <p className="text-orange-100 ml-3">Caja de Ahorro $</p>
          <p className="text-orange-100 ml-5">$ 1000.00</p>
          <button className="text-orange-900 text-center ml-40 ">
            <Link to={"/cuenta"}>Ver Todo</Link>
          </button>
        </div>

        <div className="bg-orange-400 w-80 m-10 rounded-lg text-xl text-orange-900">
          <h5 className="font-bold ml-2">Tarjetas</h5>
          <div>
            <p className="text-orange-100 ml-3">Número de tarjeta</p>
          </div>
          <p className="text-orange-100 ml-5">1234 5678 9123 4567</p>
          <button className="text-orange-900 text-center ml-40 ">
            Ver tarjeta
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-80">
          <img src={BannerA} alt="" />
        </div>
        <div className="w-80 items-center">
          <img src={Banner} alt="" />
        </div>
        <div className="w-80">
          <img src={BannerB} alt="" />
        </div>
      </div>
    </>
  );
};

export default Inicio;
