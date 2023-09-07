import React from "react";
import Foto from "../../assets/images/mejor_registro.png";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png"

const Registro = () => {
  return (
    <>
        <div className="flex h-screen">
            
            <div className="flex flex-col items-center bg-white w-[50%] justify-center ">
                <img src={Logo} alt="" className="h-[4rem] w-[5rem] mt-[2rem]" />
                <h2 className="text-2xl font-inter font-bold tracking-wider mt-[1rem] mb-2">
                    REGISTRARSE
                </h2>
                <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <div className="mb-4 flex flex-col w-full">
                        <label
                            className="flex text-gray-400 text-sm font-bold mb-2"
                            htmlFor="email"
                            >
                            Email
                        </label>
                        <input
                            className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="flex text-gray-400 text-sm font-bold mb-2"
                            htmlFor="password"
                            >
                            Contraseña
                        </label>
                        <input
                            className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none "
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="flex text-gray-400 text-sm font-bold mb-2"
                            htmlFor="password"
                            >
                            Confirmar contraseña
                        </label>
                        <input
                            className="border-b-2 w-full  text-gray-700 leading-tight focus:outline-none "
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="notification" className="mr-2" />
                            <label htmlFor="notification" className="text-sm text-gray-700">
                                Recibir notificaciones
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="w-[25vw] bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            >
                            Crear cuenta
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="w-[25vw] px-16 flex align-center mt-[1rem] bg-black hover:bg-zinc-900 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            > Crear cuenta con  
                            <img src= {Google} alt="" className="h-[1.5rem] ml-2"/> 
                        </button>
                    </div>

                    <div className="mt-4 flex justify-center">
                        <p className="text-sm text-gray-700">
                            Ya tienes una cuenta?{" "}
                            <href src="#" className="text-blue-800">Iniciar sesión</href>
                        </p>
                    </div>
                </form>
            </div>

            <div >
                <img 
                    src={Foto} 
                    alt="" 
                    className="h-screen" 
                />
            </div>
        </div>
    </>
  );
};

export default Registro;
