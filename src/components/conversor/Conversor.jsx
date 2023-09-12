import React from "react";

const Conversor = () => {
  return (
    <>
      <section className="flex flex-col place-items-center m-10">
        <div>
          <h1 className="flex justify-center my-6 text-4xl">
            Conversor de moneda
          </h1>
          <h3 className="flex justify-center my-6 text-2xl">
            Elegí la moneda e ingresá la cantidad
          </h3>
        </div>

        <div className="flex">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-2"
            type="number"
            placeholder="0"
          />
          <select className="bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected value="ARS">
              ARS
            </option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div className="flex flex-row justify-center items-center m-3">
          <div className="flex min-w-[8rem] text-red-600 font-bold text-lg">
            <span>$</span>
            <p>365.00</p>
          </div>
          <button className="text-xl border-none bg-transparent">⬆️⬇️</button>
        </div>

        <div className="flex">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-2"
            type="number"
            placeholder="0"
          />
          <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="ARS">ARS</option>
            <option selected value="USD">
              USD
            </option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Conversor;
