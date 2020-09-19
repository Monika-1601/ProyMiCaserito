import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appcontext';

function Cabecera(){
  let {carrito,setCarrito,usuario,login,logout} = useContext(AppContext);
  let [busqueda,setBusqueda] = useState("");
  useEffect(()=>{
      if(localStorage.carrito){
        let nCarrito = localStorage.getItem("carrito");
        setCarrito(JSON.parse(nCarrito));
      }
      if(localStorage.auth){
        let nAuth = localStorage.getItem("auth");
        login(JSON.parse(nAuth));
      }
  },[]);//solo se ejecuta una vez al cargarse el componente
  function updateBusqueda(e){
    setBusqueda(e.target.value);
  }
  function buscar(){
    let ruta = "/buscar/"+busqueda;
    window.location = ruta;
  }
		return(
			<div id="cabecera">
               

				<div className="logo" align="left"><Link to="/"><img src="/img/Logo.png"/></Link></div>
				<div className="buscador">
				<input type="text"  
				 defaultValue={busqueda} onChange={updateBusqueda.bind(this)}
				 placeholder="¿Que Producto estas buscando?"/>
				<button onClick={buscar.bind(this)}><img src="/img/lupa.png"/></button>
        </div>
				
        <div className="enlaces">
					<Link to="/login">
					  <button className="login" > Login </button>
					</Link> 

            <div className="contenedor">
					   <Link to="/carrito"><img src="/img/carrito1.png"/> 
              <div className="textoencima"> ({carrito.length}) </div>
             </Link>
            </div>
				</div>
       
			</div>
		);
	}
export default Cabecera;
