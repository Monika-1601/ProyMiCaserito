import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appcontext';
function ProductoDetalle(props){
	let {carrito,setCarrito} = useContext(AppContext);
	let [producto,setProducto] = useState({});
	let [cantidad,setCantidad] = useState(1);
	useEffect(() => {
		let idprod = props.match.params.id;
		let ruta = "http://localhost:3001/productos/"+idprod;
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			setProducto({
				nombre: datos.nombre,
				precio: datos.precio.toFixed(2),
				imagen: datos.imagen
			});
		});
	},[]); // se ejecuta solo una vez
	function updateCantidad(e){
		setCantidad(e.target.value);
	}
	function agregarProducto(){
		let idprod = props.match.params.id;
		let nProducto = {
			id: idprod,
			nombre: producto.nombre,
			precio: producto.precio,
			cantidad: parseInt(cantidad)
		}
		console.log(nProducto)
		let nCarrito = carrito;
		let encontrado = false;
		for(let item of nCarrito){ // Recorro los items del carrito
			if(item.id===idprod){ // Si encuentro el producto en el carrito
				item.cantidad += nProducto.cantidad; //sumo la cantidad que compro a la existente
				encontrado = true;
				break;
			}
		}
		if(!encontrado) //si no se encontró el producto en el carrito
			nCarrito = carrito.concat(nProducto); //Agrego el producto
		console.log(nCarrito);
		localStorage.setItem("carrito",JSON.stringify(nCarrito));
		setCarrito(nCarrito);
		window.alert("Producto agregado!");
	}
	return(
		<div id="producto_detalle">
			<div className="ruta">
				<Link to="/">Inicio</Link> / Producto / {producto.nombre}
			</div>
			<div className="caja_producto">
				<div className="imagen"><img src={"/img/"+producto.imagen} alt="" /></div>
				<div className="datos">
					<h2>{producto.nombre}</h2>
					<div className="precio">S/ {producto.precio}</div>
					<div className="controles">
						<input type="number" className="cajaCantidad" onChange={updateCantidad.bind(this)} defaultValue="1" min="1" />
						<button className="btnCarrito" onClick={agregarProducto.bind(this)}>Agregar al carrito</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProductoDetalle;