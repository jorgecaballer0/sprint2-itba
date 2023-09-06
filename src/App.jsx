import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";

function App() {
  return (
    <>
      <Conversor />
      <hr className="mt-2" />
      <Prestamos />
    </>
  );
}

export default App;
