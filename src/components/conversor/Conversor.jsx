import React, { useState, useEffect } from "react";

const Conversor = () => {
  const [moneda1, setMoneda1] = useState("USD");
  const [moneda2, setMoneda2] = useState("ARS");
  const [listaMonedas, setListaMonedas] = useState([]);
  const [montoIngresado, setMontoIngresado] = useState(undefined);
  const [valorCambio, setValorCambio] = useState(undefined);
  const [valorMoneda1, setValorMoneda1] = useState(undefined);
  const [valorMoneda2, setValorMoneda2] = useState(undefined);

  useEffect(() => {
    const URL = "https://v6.exchangerate-api.com/v6";
    const API_KEY = "b5161e898c850d8b3be17bf6";

    fetch(`${URL}/${API_KEY}/latest/${moneda1}`)
      .then((resp) => resp.json())
      .then((data) => setListaMonedas(Object.keys(data.conversion_rates)));
  }, [moneda1]);

  function handleConvert(e) {
    e.preventDefault();
    if (moneda1 !== moneda2 && montoIngresado !== 0) {
      const URL = "https://v6.exchangerate-api.com/v6";
      const API_KEY = "b5161e898c850d8b3be17bf6";
      fetch(`${URL}/${API_KEY}/pair/${moneda1}/${moneda2}/${montoIngresado}`)
        .then((resp) => resp.json())
        .then((data) => {
          setValorCambio((data.conversion_rate));
          setValorMoneda1(data.base_code);
          setValorMoneda2(data.target_code);
        });
    }
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div>
          <h1 className="flex justify-center my-6 text-4xl">
            Conversor de moneda
          </h1>
          <h3 className="flex justify-center my-6 text-2xl">
            Elegí la moneda e ingresá la cantidad a convertir
          </h3>
        </div>
        <form>
          <div className="flex justify-center items-center gap-4 my-2">
            <select
              value={moneda1}
              name="moneda1"
              id="moneda1"
              onChange={(e) => setMoneda1(e.target.value)}
              className="bg-gray-50 border rounded-md border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              required
            >
              {listaMonedas.map((monedas, i) => (
                <option value={monedas} key={i}>
                  {monedas}
                </option>
              ))}
            </select>
            <div>
              <span className="cursor-default">➡️</span>
            </div>
            <select
              value={moneda2}
              name="moneda2"
              id="moneda2"
              onChange={(e) => setMoneda2(e.target.value)}
              className="bg-gray-50 border rounded-md border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              required
            >
              {listaMonedas.map((monedas, i) => (
                <option value={monedas} key={i}>
                  {monedas}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <input
              defaultValue={montoIngresado}
              onChange={(e) => setMontoIngresado(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              type="number"
              placeholder="Ingresar monto"
              required
              min="1"
            />
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none  font-semibold rounded-md text-sm w-auto px-5 py-2 "
              onClick={handleConvert}
            >
              Convertir
            </button>
          </div>
        </form>
        {montoIngresado === undefined ? (
          <p className="font-semibold text-md my-2">
            Ingrese un valor para realizar la conversión
          </p>
        ) : (
          <div className="flex font-semibold m-2">
            <span className=" text-red-600 mx-1">
              {montoIngresado} {valorMoneda1}
            </span>
            <div className="flex gap-1">
              <p>es equivalente a:</p>
              <span className="text-green-600">
                {(valorCambio * montoIngresado).toFixed(2)} {valorMoneda2}
              </span>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Conversor;
