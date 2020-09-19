import React from 'react';
import { Link } from 'react-router-dom';
function Categoria(props){
	let categoria = props.dato;
	return(
		<div className="caja">
			<Link to={`/categoria/detalle/${categoria.id}`}>
				<div className="foto"><img src={"/img/"+categoria.imagen} alt="" /></div>
				<div className="nombre">{categoria.nombre}</div>
			</Link>
		</div>
	);
}
export default Categoria;