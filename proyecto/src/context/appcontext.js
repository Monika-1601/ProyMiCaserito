import React , { useState } from 'react';

let AppContext = React.createContext();
let { Provider, Consumer } = AppContext;

function AppProvider({children}){
	let [carrito,setCarrito] = useState([]);
	let [usuario,setUsuario] = useState(null);
	function login(usuario){
		setUsuario(usuario);
	}
	function logout(){
		setUsuario(null);
		localStorage.removeItem("auth");
		//localStorage.clear(); //Elimina todo del localstorage.
	}
	return(
		<Provider value={{carrito,setCarrito,usuario,login,logout}}>
			{children}
		</Provider>
	)
}

export { AppProvider, Consumer as AppConsumer, AppContext }