import React from "react";

const FormPrestamos = () => {
  return (
    <>
      <section className="inputs-form">
        <form id="formPrestamos">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ingresar monto del préstamo
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-md text-gray-900 bg-gray-300 border border-r-0 border-gray-300 rounded-l-md">
                $
              </span>
              <input
                type="number"
                id="montoPrestamo"
                placeholder="Monto del préstamo"
                min="1000"
                required
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Indicar el número de cuotas
            </label>
            <select
              name="cuotasPrestamo"
              id="cuotasPrestamo"
              className="bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm block w-full p-2.5"
              required
            >
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ingresar tasa de interés anual
            </label>
            <div className="flex">
              <input
                type="number"
                id="montoPrestamo"
                placeholder="Tasa de interés anual"
                min="25"
                required
                className="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
              />
              <span className="inline-flex items-center px-3 text-md text-gray-900 bg-gray-300 border border-l-0 border-gray-300 rounded-r-md">
                %
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-6" id="btnForm">
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-auto px-5 py-2.5 text-center"
              onClick="generarTabla()"
            >
              Calcular
            </button>
            <button
              type="submit"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-auto px-5 py-2.5 text-center"
              onClick="limpiarForm()"
            >
              Limpiar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormPrestamos;
