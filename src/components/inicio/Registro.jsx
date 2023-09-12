import React from "react";
import Logo from "../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <>
      <section className="flex h-screen">
        <div className="w-[55%] flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-[5rem] w-[6rem] mt-[2rem]"
            />
            <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
              REGISTRARSE
            </h2>
          </div>
          <form className="flex flex-col items-center bg-white shadow-md rounded p-8 mx-auto">
            <div className="mb-4 flex flex-col w-full">
              <label
                className="flex text-gray-400 text-sm font-bold mb-2"
                htmlFor="emailLogin"
              >
                Email
              </label>
              <input
                className="border-b-2 w-full text-gray-700 leading-tight focus:outline-none"
                id="emailLogin"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-6 flex flex-col w-full">
              <label
                className="flex text-gray-400 text-sm font-bold mb-2"
                htmlFor="passwordLogin"
              >
                Contraseña
              </label>
              <input
                className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                id="passwordLogin"
                type="password"
                placeholder="Contraseña"
              />
            </div>

            <div className="mb-6 flex flex-col w-full">
              <label
                className="flex text-gray-400 text-sm font-bold mb-2"
                htmlFor="passwordLogin"
              >
                Confirmar contraseña
              </label>
              <input
                className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                id="passwordLogin"
                type="password"
                placeholder="Contraseña"
              />
            </div>

            <button
              className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Registrarme
            </button>

            <button
              className="w-full flex justify-center items-center gap-2 bg-black hover:bg-zinc-900 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Registrame con
              <span className="text-2xl">
                <FcGoogle />
              </span>
            </button>
            <div className="mt-4 flex justify-center">
              <p className="text-sm text-gray-700">
                ¿Ya tienes una cuenta?{" "}
                <Link to={'/'} className="text-blue-800">Iniciar sesión</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-[45%] imagenInicio"></div>
      </section>
    </>
  );
};

export default Registro;
