import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appcontext';
function Pie(){
	return(

    	<div id="pie" class="piepag">
		 
		   <div class="contienepie">  

					<div class="nosotros">
							<ul>
								<h3>Nosotros</h3>
								<li><Link to="/historia"> Nuestra Historia</Link> <br/></li>
								<li><Link to="/comunidad"> Comunidad Mi Caserito</Link></li>
								<a url=""> <img></img> </a>
								<a url=""> <img></img> </a>
								<a url=""> <img></img> </a>
							</ul>              
					</div><br/>

					<div class="contactenos">          
							<ul>
								<h3>Contáctenos</h3>
								<li> delivery@MiCaserito.com.pe</li>
								<li> 01-678-0000 </li>
								<li> 999-888-777 </li>
							</ul>
					</div>

					<div class="ubicanos">
						<h3>Ubícanos</h3>
							<img></img>
					</div>

					<div class="transparencia">
							<ul>
								<h3>Transparencia</h3>
								<li> Libro de Reclamaciones</li>
								<li> Política de Privacidad </li>
								<li> Términos y Condiciones </li>
							</ul>
					</div>
        
		  </div>
	      
     
          <div class="copyright">    
		   <center> <p> MiCaserito - Todos los derechos reservados &copy; 2020</p> </center>
		  </div>  

	  </div>		
	);
}  
export default Pie;