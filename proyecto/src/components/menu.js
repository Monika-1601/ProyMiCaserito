import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from "../helpers/appcontext";

class Menu extends Component {
	static contextType=AppContext;

	state = {
		autenticado: "",
		categoria:""
	}

	setAutenticado(e){
		this.setState({
			autenticado: e.target.value
		});
	}

   setCategoria(e){
		this.setState({
			categoria: e.target.value
		});
	}

	categorizar(){     
		let micategoria = this.state.categoria;
		let ruta = "/categoria/"+micategoria;
		this.setState ({
              micategoria:""
		});
     	window.location.hash = ruta;
	}

	render(){
		return(
			<div id="menu">				
				<h2>Categorías </h2>
				<img src={"/img/flechaabajo.png"} alt=""></img>
				<Link to={`/categoria/subcategoria/${this.subcategoria.id}`}/>
				
			</div>
		);
	}
}
export default Menu;
