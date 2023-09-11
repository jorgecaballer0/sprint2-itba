export function calcularTotal(cantidad, plazo) {
  const cantidadInt = parseInt(cantidad);
  const plazoInt = parseInt(plazo);

  let totalCantidad;
  if (cantidadInt <= 1000) {
    totalCantidad = cantidadInt * 0.4;
  } else if (cantidadInt > 1000 && cantidadInt <= 25000) {
    totalCantidad = cantidadInt * 0.35;
  } else if (cantidadInt > 25000 && cantidadInt <= 50000) {
    totalCantidad = cantidadInt * 0.3;
  } else {
    totalCantidad = cantidadInt * 0.25;
  }

  let totalPlazo;
  switch (plazoInt) {
    case 3:
      totalPlazo = cantidadInt * 0.05;
      break;
    case 6:
      totalPlazo = cantidadInt * 0.15;
      break;
    case 9:
      totalPlazo = cantidadInt * 0.25;
      break;
    case 12:
      totalPlazo = cantidadInt * 0.3;
      break;
    case 18:
      totalPlazo = cantidadInt * 0.35;
      break;
    case 24:
      totalPlazo = cantidadInt * 0.4;
      break;
    default:
      break;
  }
  return totalCantidad + totalPlazo + cantidadInt;
}
