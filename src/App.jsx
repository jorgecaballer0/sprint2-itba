import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";

function App() {
  return (
    <>
      <Prestamos />
      <hr />
      <Conversor />
    </>
  );
}

export default App;
