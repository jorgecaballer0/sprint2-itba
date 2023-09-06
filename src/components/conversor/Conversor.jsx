import React from "react";

const Conversor = () => {
  return (
    <>
      <section className="conversor">
        <div>
          <h1 className="title-seccion">Conversor de moneda</h1>
          <h3 className="subtitle">Elegí la moneda e ingresá la cantidad</h3>
        </div>
        
        <div>
          <input type="number" id="cantidad_1" placeholder="0" />
          <select id="primer_moneda">
            <option value="ARS" selected>
              ARS
            </option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div className="valor-moneda">
          <div id="cambio" className="valor-actual"></div>
          <button id="cambio_valor">⬆️⬇️</button>
        </div>
        
        <div>
          <input type="number" id="cantidad_2" placeholder="0" />
          <select id="segunda_moneda">
            <option value="ARS">ARS</option>
            <option value="USD" selected>
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
