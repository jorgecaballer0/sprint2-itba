import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="justify-center">
      <h1 className="text-orange-800 font-bold text-4xl">Oh No!</h1>
      <p className="text-2xl text-blue-600 ">Lo sentimos mucho, algo salió mal :c</p>
      <p className=" text-blue-900">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}