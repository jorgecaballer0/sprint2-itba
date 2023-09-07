import React from "react";




const Footer = () =>{
    return(
        <>
        <div className="w-screen">
        <div className="bg-gradient-to-t from-orange-400  h-50 w-screen mt-20">
         <div className="w-80" >
            <ul className="text-orange-800 text-xl ml-10" >
                <li><a href="#">|| Términos y condiciones</a></li>
                <li><a href="#">|| Políticas de privacidad</a></li>
                <li><a href="#">|| Contacto</a></li>
            </ul>
        <div className="text-orange-800 text-xl w-screen text-center  ">
            <button className="m-2">Facebook</button>
            <button className="m-2"> Instagram</button>
            <button className="m-2"> Whatsapp</button>

            
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Footer