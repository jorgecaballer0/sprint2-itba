import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-screen fixed bottom-0">
        <div className="bg-gradient-to-t from-orange-400  h-50 w-screen mt-20">
          <div className="w-80 ">
            <ul className="text-orange-800 text-xl ml-10 sm:mb-5 mt-5">
              <li>
                <a href="#">|| Términos y condiciones</a>
              </li>
              <li>
                <a href="#">|| Políticas de privacidad</a>
              </li>
              <li>
                <a href="#">|| Contacto</a>
              </li>
            </ul>
            <div className="text-orange-800 w-screen text-center ">
              <Link to={'https://www.facebook.com'} target="blank">
              <button className="m-2 text-3xl">
                <FaFacebookSquare></FaFacebookSquare>
              </button>
              </Link>
              <Link to={'https://www.instagram.com'} target="blank">
              <button className="m-2 text-3xl">
                <FaInstagram></FaInstagram>
              </button>
              </Link>
              <Link to={'https://www.whatsapp.com'} target="blank">
              <button className="m-2 text-3xl">
                <FaWhatsappSquare></FaWhatsappSquare>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
