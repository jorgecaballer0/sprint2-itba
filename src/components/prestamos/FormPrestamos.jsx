import React, { useState } from "react";
// import { calcularTotal } from "../../utils/prestamos";

const FormPrestamos = ( cantidad, setCantidad, plazo, setPlazo ) => {
  const [error, setError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
    }
    setError(false);

    // calcularTotal(cantidad, plazo);
  };

  return (
    <>
      {cantidad}
      {plazo}
      <form onSubmit={calcularPrestamo}>
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
              placeholder="Monto del préstamo"
              min="1000"
              required
              className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Indicar el número de cuotas
          </label>
          <select
            name="cuotasPrestamo"
            className="bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm block w-full p-2.5"
            required
            onChange={(e) => setPlazo(e.target.value)}
          >
            <option selected disabled>
              Seleccionar cuotas
            </option>
            <option value="1">1</option>
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
          >
            Calcular
          </button>
          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-auto px-5 py-2.5 text-center"
          >
            Limpiar
          </button>
        </div>
      </form>
      {error ? (
        <p className="text-center text-red-800">
          Los campos son obligatorios para poder calcular
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default FormPrestamos;
