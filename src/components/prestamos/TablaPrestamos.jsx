import React from "react";

const TablaPrestamos = () => {
  return (
    <>
      <section className="payment">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>N° de cuota</td>
              <td>Valor de cuota</td>
              <td>Interes generado</td>
              <td>Importe a pagar</td>
            </tr>
          </thead>
          <tbody id="tabla"></tbody>
          <tfoot>
            <tr>
              <td id="total"></td>
              <td id="col-1"></td>
              <td id="col-2"></td>
              <td id="col-3"></td>
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  );
};

export default TablaPrestamos;
