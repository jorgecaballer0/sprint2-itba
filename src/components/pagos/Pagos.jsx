import React from "react";

const Pagos = () => {
  return (
    <>
      <h1 className="flex justify-center my-6 text-4xl">Pagos</h1>
      <section className="relative overflow-x-auto border rounded-md mt-4 mx-auto w-4/5">
        <table className="w-full text-sm text-left text-gray-500">
          {/* Titulos */}
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                N° de transacción
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Cuenta
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                Motivo
              </th>
              <th scope="col" className="px-6 py-3 font-extrabold">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 font-extrabold">
                Importe
              </th>
            </tr>
          </thead>
          {/* Datos */}
          <tbody>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">ITBA</td>
              <td className="px-6 py-4 bg-gray-50 ">Cuota</td>
              <td className="px-6 py-4">03/08/23</td>
              <td className="px-6 py-4 bg-gray-50 ">$40.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">ITBA</td>
              <td className="px-6 py-4 bg-gray-50 ">Cuota</td>
              <td className="px-6 py-4">05/09/23</td>
              <td className="px-6 py-4 bg-gray-50">$40.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">ITBA</td>
              <td className="px-6 py-4 bg-gray-50 ">Cuota</td>
              <td className="px-6 py-4">06/10/23</td>
              <td className="px-6 py-4 bg-gray-50">$40.000</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium bg-gray-50">00000000001</td>
              <td className="px-6 py-4">ITBA</td>
              <td className="px-6 py-4 bg-gray-50 ">Cuota</td>
              <td className="px-6 py-4">03/11/23</td>
              <td className="px-6 py-4 bg-gray-50">$40.000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Pagos;
