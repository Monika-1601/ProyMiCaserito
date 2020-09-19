import React, { Component } from 'react';
import Producto from './producto';
import Categoria from './categoria';

class Principal extends Component {
	constructor(){
		super();
		this.state = {
			lista: []
		}
	}
	componentDidMount(){
		let ruta = "http://localhost:3001/categorias";
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			this.setState({
				lista : datos
			})
		});
	}
	render(){
		return(
			<div id="principal">
				<h1>Productos</h1>			
				
			</div>
		);
	}
}
export default Principal;