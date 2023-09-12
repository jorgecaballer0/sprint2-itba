import React from "react";

const TablaPrestamos = () => {
  return (
    <>
      <section className="relative overflow-x-auto border rounded-md mt-4 mx-auto w-4/5">
        <table className="w-full text-sm text-left text-gray-500">
          {/* Titulos */}
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                N° de cuota
              </th>
              <th scope="col" className="px-6 py-3">
                Valor de cuota
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 ">
                Interes generado
              </th>
              <th scope="col" className="px-6 py-3">
                Importe a pagar
              </th>
            </tr>
          </thead>
          {/* Datos */}
          <tbody id="tabla">
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                1
              </td>
              <td className="px-6 py-4">$100,00</td>
              <td className="px-6 py-4 bg-gray-50 ">$50,00</td>
              <td className="px-6 py-4">$150,00</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                2
              </td>
              <td className="px-6 py-4">$100,00</td>
              <td className="px-6 py-4 bg-gray-50 ">$50,00</td>
              <td className="px-6 py-4">$150,00</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                3
              </td>
              <td className="px-6 py-4">$100,00</td>
              <td className="px-6 py-4 bg-gray-50 ">$50,00</td>
              <td className="px-6 py-4">$150,00</td>
            </tr>
          </tbody>
          {/* Footer de la tabla */}
          <tfoot className="font-semibold">
            <tr className="text-gray-900">
              <th
                id="total"
                scope="row"
                className="px-6 py-3 text-base bg-gray-50"
              >
                Total
              </th>
              <td id="col-1" className="px-6 py-3">
                $300,00
              </td>
              <td id="col-2" className="px-6 py-3 bg-gray-50">
                $150,00
              </td>
              <td id="col-3" className="px-6 py-3">
                $450,00
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default TablaPrestamos;
