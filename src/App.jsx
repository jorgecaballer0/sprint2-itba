import React from "react";
import Conversor from "./components/conversor/Conversor";
import Prestamos from "./components/prestamos/Prestamos";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Conversor />
      <hr />
      <Prestamos />
    </div>
  );
}

export default App;
