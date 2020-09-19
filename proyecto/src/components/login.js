import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appcontext';

function Login(){
	let {login} = useContext(AppContext);
	let [email,setEmail] = useState("flinares@mail.com");
	let [clave,setClave] = useState(null); //123
    
  	function onEmail(e){
		setEmail(e.target.value);
	}
	function onClave(e){
		setClave(e.target.value);
	}
	function onLogin(e){
		e.preventDefault();
		let ruta = `http://localhost:3001/usuarios?email=${email}&clave=${clave}`;
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			if(datos.length){
				console.log(datos);
				let usuario = {
					id: datos[0].id,
					email: datos[0].email,
					nombres: datos[0].nombre+" "+datos[0].apellido
				};
				login(usuario);
				localStorage.setItem("auth",JSON.stringify(usuario));
				window.location = "/carrito";
				//alert(`Bienvenido ${datos[0].nombre} !`);
			}else{
				alert("Datos incorrectos");
			}
		});
	}
	return(
         
        <div className="autenticacion">
		<div id="login" className="tucuenta"   >
			<h1>Ingresa tu Cuenta</h1>
			<form onSubmit={onLogin.bind(this)}>
				<input type="text" placeholder="Correo" onChange={onEmail.bind(this)} className="input_login" value={email} /> <br/> <br/>
				<input type="password" placeholder="Contraseña" onChange={onClave.bind(this)} className="input_login" /> <br/><br/>
				<button className="btnIngresar">Aceptar</button> <br/><br/><br/>
				<Link to="/recupera">
					  ¿Olvidaste tu Contraseña?
			    </Link> 
			</form>
		</div>

 
	   <div id="registro" className="turegistro">
			<h1>Registra tu Cuenta</h1>
			<form onSubmit="">

			    <div className="primero" >
				 <input type="text" placeholder="Correo" className="registra_login" /> 
				 <input type="password" placeholder="Contraseña"  className="registra_login" /> 
				 <input type="password" placeholder="Comfirma Contraseña"  className="registra_login" />
				</div><br/>

	            <div className="segundo" >  
				 <input type="text" placeholder="Nombre y Apellidos/Razon Social" className="registra_login" />
				 <select id="tipodocumento" name="tipodocumento" className="registra_login">
  						<option value="1">DNI</option>
 						 <option value="2">RUC</option>
 						 <option value="3">Carnet Extranjeria</option> 						 
				 </select>
                 <input type="text" placeholder="Nro Documento" className="registra_login" />
                </div> <br/>

				<div className="tercero" >
                <select id="distrito" name="distrito" className="registra_login">
  						 <option value="0">Distrito</option>
  						 <option value="1">Lima</option>
 						 <option value="2">Jesús María</option>
 						 <option value="3">La Victoria</option> 	
 						 <option value="4">Lince</option> 	
 						 <option value="5">Magdalena del Mar</option> 
 						 <option value="6">Miraflores</option> 
 						 <option value="7">Pueblo Libre</option> 			 
				</select>
				<input type="text" placeholder="Dirección Pedido" className="registra_login" />
				<input type="text" placeholder="Número Teléfono" className="registra_login" />
				</div><br/><br/>

				<button className="btnRegistrar">Aceptar</button> <br/><br/><br/>
			</form>
		</div>

		</div>

	)
}
export default Login;