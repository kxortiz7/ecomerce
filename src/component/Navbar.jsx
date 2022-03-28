import '../styles/css/navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import imgdog from '../assets/img/home/12.jpg';
import wing from '../assets/img/footer/wing.png'

const Navbar = () => {
  return (
    <div className='sticky-top'>
      <div className="container-fluid-head ">
        <h5>HOT SALE -30% EN SANDALIAS</h5>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-container-two">
        <div className="container-fluid">
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id='nav-ul'>
              <li className="nav-item-1">
                <NavLink className="nav-link " aria-current="page" to="/home">DIRECTORIO DE TIENDAS</NavLink>
              </li>
              <li className="nav-item-1">
                <NavLink className="nav-link" to="/home">SERVICIO AL CLIENTE</NavLink>
              </li>
              <li className="nav-item-1">
                <NavLink className="nav-link " to="/home">MI CUENTA</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className='container-fluid-two-l'>
          <NavLink to="/home">
            <img src={imgdog} alt="" /></NavLink>
        </div>
        <div className="flex-item ms-auto mx-5" id='col-xs-4' >
          <form className="d-flex">
            <div className="input-group ">
              <input type="text" className="form-control" placeholder="Buscar" />
              <span className="input-group-text">
                <NavLink to="/home">
                  <img className='icon-footer' src={wing} alt="" /></NavLink>  </span>
            </div>


          </form>

          <div className="container-fliud-promo">

            <h6>ENVIO GRATIS PARA PEDIDOS SUPERIORES A $300.000</h6>
          </div>
        </div>
      </nav>


      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 " id='nav-cl-two' >
        <div className="container-fluid ">
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0" id='nav-ul'>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/categorias">HOMBRE </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">MUJER</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">BLOG</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">HISTORIA</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">TIENDA</NavLink>
              </li>
            </ul>
          </div>
          <div className='car-shop'>
            <i className="bi bi-cart3 fa-2x" ></i>
            <h6>CARRITO</h6>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Navbar;