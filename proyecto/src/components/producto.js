import React from 'react';
import { Link } from 'react-router-dom';
function Producto(props){
	let producto = props.dato;
	return(
		<div className="caja">
			<Link to={`/producto/detalle/${producto.id}`}>
				<div className="foto"><img src={"/img/"+producto.imagen} alt="" /></div>
				<div className="nombre">{producto.nombre}</div>
				<div className="precio">S/ {producto.precio.toFixed(2)}</div>
			</Link>
		</div>
	);
}
export default Producto;