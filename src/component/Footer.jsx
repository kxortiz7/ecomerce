import React from 'react';
import '../styles/css/footer.css';
import wing from '../assets/img/footer/wing.png';
import ppagos from '../assets/img/footer/p.pagos.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="container-fluid-footer ">
        <p> @HUSHPUPPIESCO</p>
        <div className='icon-f'>
          <i className="bi bi-facebook fa-2x "></i>
          <i className="bi bi-instagram fa-2x "></i>
        </div>
      </div>
      <div className='mx-5 ' >
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title">SERVICIO AL CLIENTE</h6>
                <p className="card-text">CONTACTENOS</p>
                <p className="card-text">CAMBIOS Y DEVOLUCIONES</p>
                <p className="card-text">POLÍTICAS DE LA TIENDA</p>
                <p className="card-text">POLÍTICA DE DATOS</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title">SERVICIO AL CLIENTE</h6>
                <p className="card-text">MIS PEDIDOS</p>
                <p className="card-text">MIS DEVOLUCIONES</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title">SERVICIO AL CLIENTE</h6>
                <p className="card-text">TIENDAS</p>
                <p className="card-text">DEVOLUCIONES</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="card-title">SERVICIO AL CLIENTE</h6>
                <p className="card-text" id='u-p'>Registrate para ser el primero en recibir nuestras noticias</p>
              </div>
              <div className="input-group">
                <input type="text" className="form-control" id='input-footer' />
                <span className="input-group-text">
                  <NavLink to="/home">
                    <img className='icon-footer' src={wing} alt="" /></NavLink>  </span>
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className="card-group-fluid border-top mt-5">
        <img src={ppagos} alt="" className="card-img-top " />
      </div>

    </>
  );
};

export default Footer;