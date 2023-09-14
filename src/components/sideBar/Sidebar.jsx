import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3 fixed top-0 left-0 right-0 text-blue-900 z-10">
      <button className="ml-8 mt-3" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`${
          open ? "w-80" : "w-0"
        } bg-sky-600 min-h-screen fixed top-0 left-0 transition-all duration-300 ;`}
      >
        <div className={`${!open && "hidden"} pt-3`}>
          <button
            className="ml-4 text-white mb-14"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>
            <div>
              <Link to={"./inicio"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Inicio
                </div>
              </Link>
              <Link to={"./cuenta"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Cuenta
                </div>
              </Link>  
              <Link to={"./pago"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Pagos
                </div>
              </Link> 
              <Link to={"./transferencia"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Transferencias
                </div>
              </Link> 
              <Link to={"./prestamos"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Préstamos
                </div>
              </Link> 
              <Link to={"./conversor"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Conversor de moneda
                </div>
              </Link> 
            </div>
            <div className="lg:mt-72 sm:mt-72 md:mt-72">
              <Link to={"./"}>
                <div className="text-center text-white text-xl hover:bg-orange-400 transition-colors cursor-pointer py-3 mb-2">
                  Cerrar sesión
                </div>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
