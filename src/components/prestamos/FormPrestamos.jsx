import React from "react";

const FormPrestamos = () => {
  return (
    <>
      <section className="inputs-form">
        <form id="formPrestamos">
          <div>
            <label>
              Ingresar el monto del préstamo
              <input
                type="number"
                placeholder="Ingrese un monto"
                id="montoPrestamo"
                required
                min="1000"
              />
            </label>
          </div>
          <div>
            <label>Indicar el número de cuotas</label>
            <select name="cuotasPrestamo" id="cuotasPrestamo">
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
          <div>
            <label>
              Tasa de interes anual
              <input
                type="number"
                placeholder="Ingrese la tasa de interes"
                id="interesPrestamo"
                required
                min="50"
              />
            </label>
          </div>
          <div id="btnForm">
            <button className="btn btn-primary" onClick="generarTabla()">
              Calcular
            </button>
            <button className="btn btn-danger" onClick="limpiarForm()">
              Limpiar
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormPrestamos;
