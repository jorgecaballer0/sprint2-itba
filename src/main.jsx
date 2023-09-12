import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";

import Error from "./routes/error";
import Inicio from "./components/inicio/Inicio";
import Cuentas from "./components/cuentas/Cuentas";
import Pagos from "./components/pagos/Pagos";
import Transferencias from "./components/transferencias/Transferencias";
import Prestamos from "./components/prestamos/Prestamos";
import Conversor from "./components/conversor/Conversor";
import InicioSesion from "./components/inicio/Inicio_sesion";
import Registro from "./components/inicio/registro";


const router = createBrowserRouter([
  {
    path: "/",
    element: <InicioSesion />,
  },
  {
    path: "registro",
    element: <Registro />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "inicio",
        element: <Inicio />,
      },
      {
        path: "cuenta",
        element: <Cuentas />,
      },
      {
        path: "pago",
        element: <Pagos />,
      },
      {
        path: "transferencia",
        element: <Transferencias />,
      },
      {
        path: "prestamos",
        element: <Prestamos />,
      },
      {
        path: "conversor",
        element: <Conversor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
