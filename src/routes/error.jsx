import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center">
      <h1 className=" justify-center text-black font-bold text-4xl mb-3">¡Oh No!</h1>
      <p className="text-2xl text-black mb-3">
        Lo sentimos mucho, algo salió mal :c
      </p>
      <p className="text-gray-700">
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to={"/inicio"}>
        <button
          className="w-72 flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-800 text-white font-bold mt-4 py-2 px-16 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Ir a inicio
        </button>
      </Link>
    </div>
  );
}
