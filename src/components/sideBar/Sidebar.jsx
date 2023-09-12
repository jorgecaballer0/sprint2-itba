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
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./inicio"}>Inicio</Link>
              </div>
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./cuenta"}>Cuenta</Link>
              </div>
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./pago"}>Pagos</Link>
              </div>
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./transferencia"}>Transferencias</Link>
              </div>
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./prestamos"}>Préstamos</Link>
              </div>
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./conversor"}>Conversor de Moneda</Link>
              </div>
            </div>
            <div className="mt-60">
              <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
                <Link to={"./conversor"}>Cerrar sesion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
