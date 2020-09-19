import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appcontext';

function Recupera(){
	let {recupera} = useContext(AppContext);
	let [email,setEmail] = useState("flinares@mail.com");
	
 	function onEmail(e){
		setEmail(e.target.value);
	}
	function onRecupera(){
		
    	alert("Se envio un correo para recuperar tu contraseña");
	}
	return(
                 	
        <div id="recupera" className="recuperatucuenta" >            
            <form onSubmit="">
            <h1>Recupera tu Cuenta</h1>
            <input type="text" placeholder="Ingresa tu Correo" onChange={onEmail.bind(this)} className="input_login" value={email} />
            <button className="btnEnviar" onClick={onRecupera()}>Enviar</button> <br/><br/><br/>
            </form>
        </div>

	)
}
export default Recupera;