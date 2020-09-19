import React, {useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppProvider, AppContext } from './context/appcontext';
import Cabecera from './components/cabecera';
import Pie from './components/pie';
import Principal from './components/principal';
import ProductoDetalle from './components/producto_detalle';
import Buscar from './components/buscar';
import Login from './components/login';
import Recupera from './components/recupera';
import Carrito from './components/carrito';
import Historia from './components/historia';
import Comunidad from './components/comunidad';
import Historial from './components/historial';
import NoEncontrado from './components/noencontrado';
import './App.css';

function App(){
  
  /*setCarrito = (carrito)=>{
    this.setState({ carrito });
  };
  state = {
    carrito: [],
    setCarrito: this.setCarrito
  };*/

 /*componentDidMount(){
    console.log("componentDidMount App");
    if(localStorage.carrito){
      console.log("localStorage.carrito");
      this.setState({
        carrito: JSON.parse(localStorage.carrito)
      });
    }
  }

  render()*/

  {
    return(
      <AppProvider >
        
        
        
        <header>
                      
          <Cabecera></Cabecera>
        </header>
        <main>
       
        <Switch>
            <Route exact path='/' component={ Principal } />
            <Route exact path='/producto/detalle/:id' component={ ProductoDetalle } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/carrito' component={ Carrito } />
            <Route exact path='/buscar/:busqueda' component={ Buscar } />
            <Route exact path='/historia' component={ Historia } />
            <Route exact path='/comunidad' component={ Comunidad } />
            <Route component={ NoEncontrado } />
          </Switch>
          
        </main>
        <footer>
          <Pie></Pie>
        </footer>
      </AppProvider>
    );
  }
}
export default App;
