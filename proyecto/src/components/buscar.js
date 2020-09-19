import React, { useState, useEffect } from 'react';
import Producto from './producto';
function Buscar(props){
	let [lista,setLista] = useState([]);
	useEffect(() => {
		listar();
	},[]); // se ejecuta solo una vez
	function listar(){
		let buscar = props.match.params.busqueda;
		let ruta = "http://localhost:3001/productos?nombre_like="+buscar;
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			setLista(datos);
			//console.log("datos",datos);
		});
	}
	return(
		<div id="principal">
			<h1>Resultado de la búsqueda para {props.match.params.busqueda}</h1>
			<div className="lista">
			{lista.map(prod=>{
				return(<Producto key={prod.id} dato={prod} />);
			})}
			</div>
		</div>
	);
}
export default Buscar;