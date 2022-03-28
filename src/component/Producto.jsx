import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/css/producto.css';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import DetalleP from './DetalleP';
import Precomendado from './Precomendado';



const Producto = () => {

    const { nombre } = useParams()
    const [prod, setProd] = useState([])
    const [data, setData] = useState({})


    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`/zapato.json`)
            setProd(await res.json())
        }
        getProduct();
    }, [])


    useEffect(() => {
        prod.map((v) => {
            return (
         (v?.nombre !== nombre) ? false : setData(v))
        })
    })

    const [talla, setTalla] = useState([])

    useEffect(() => {
        const getTalla = async () => {
            const res = await fetch("/tallas.json")
            setTalla(await res.clone().json())
        }
        getTalla();
    }, [])

    console.log(nombre)

    return (
        <>
            <Navbar />
           
            <div className="container d-flex">
                <div className="col-md-6">
                    <div className="card">
                        <h6 className='my-3 text-uppercase'>HUSHPUPPIESCO/ CALZADO / {data.nombre}</h6>
                        <div className="card-img">
                            <img src={`./img/product/${data.foto}`} className="card-img-top d-block fluid" id="img-vp" />
                            <div className="card-img-f border-top"></div>
                            <img src={`./img/product/${data.foto}`} />
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="card-description">
                        <h3 className='text-uppercase mt-4'>{data.nombre}</h3>
                        <p className='data-precio' >${data.precio}</p>
                        <p className='cod-product'>Cod. de producto {data.referencia}</p>
                        <h6>COLOR</h6>
                        <div className="border-2" >
                            <img src={`./img/product/${data.foto}`} />
                        </div>
                        <h6 className='mt-3'>TALLA</h6>
                        <div className=" my-2 col-md-10" id='col'>
                            <div className="row row-cols-1 row-cols-md-3 ">
                                {talla.map((t) => {
                                    return (
                                        <div key={t.id} className="col-md-4" id='b-talla'>
                                            <NavLink to="">
                                                <p className="text-center p-1 mt-2" >{t.talla} </p>
                                            </NavLink>

                                        </div>
                                    )

                                })}

                            </div>
                            <h6>GUIA DE TALLAS</h6>
                        </div>
                    </div>
                    <div className="col-md-6" id='m-b-comprar'>                        
                            <div className="d-grid gap-2">
                                <NavLink to={`/Producto/${data.nombre}`} type="button" className="btn btn-primary" id='button-comprar'> AGREGAR AL CARRITO</NavLink>
                            </div>
                        
                    </div>
                </div>
                                
            </div>
            
            <DetalleP product={prod}/>
            <Precomendado product={prod}/>

            




            <Footer />
        </>
    );
};

export default Producto;