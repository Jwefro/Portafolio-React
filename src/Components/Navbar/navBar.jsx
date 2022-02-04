import React from 'react';
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return <div>
      <div className='Navv'>
      <nav className="navbar  bg-dark">
            <input type="checkBox" id="check"/>
              <label for="check" className="fabars"></label>
            
              
        <ul className="nav-menu">
          <li className="nav-item ">
            <span to="/home" className="nav-link " >Inicio</span>
          </li>
          <li className="nav-item">
            <span to="/servicios" className="nav-link ">Sobre mi</span>
          </li>
          <li className="nav-item">
            <span to="/productos"className="nav-link ">Habilidades</span>
          </li>
          <li className="nav-item">
            <span to="/sobreNosotros"className="nav-link ">Portafolio</span>
          </li>
          <li className="nav-item">
            <span to="/contactos"className="nav-link ">Contactos</span>
          </li>
        </ul>
            </nav>
      </div>
  </div>;
};

export default NavBar;
