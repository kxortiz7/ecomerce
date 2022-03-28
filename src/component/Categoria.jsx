import React, { useState, useEffect } from 'react';
import '../styles/css/productList.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


const Categoria = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch("/zapato.json")
            setData(await res.json())
        }
        getProducts();
    }, [])

    const Tzapatos = data.length

    const [talla, setTalla] = useState([])


    useEffect(() => {
        const getTalla = async () => {
            const res = await fetch("/tallas.json")
            setTalla(await res.clone().json())
        }
        getTalla();
    }, [])


    return (
        <>
            <Navbar />
           
            <div className="d-flex mx-5 my-5" id='col'>
                <div className="col-md-3">
                    <h1 className='mx-2'>CALZADO</h1>
                    <h5 className='mx-2'>TODOS ({Tzapatos})</h5>
                    <div className="card border my-2 mx-2" id='card-p'>
                        <h6 className='mx-3 mt-4'>TALLA</h6>
                        <div className="row row-cols-1 row-cols-md-6 mx-2">
                            {talla.map((t) => {
                                return (
                                    <div key={t.id} className="card md-2 text-center">
                                        <NavLink to="" >
                                            <p className="my-2">{t.talla} </p>
                                        </NavLink>
                                    </div>
                                )

                            })}


                        </div>
                        <div className="content-mx-3 mt-2 mb-4">
                            <h6 className='mx-3 my-2 mt-3'>PRECIO</h6>
                            <p className='mx-3'>$150.000 - $300.000 (0)</p>
                            <p className='mx-3 '>$300.000 - $450.000 (0)</p>
                            <h6 className='mx-3 my-3'>MATERIAL</h6>
                            <p className='mx-3'>Cuero (18)</p>
                            <p className='mx-3 '>Nubuck (2)</p>
                            <h6 className='mx-3 my-3'>COLOR</h6>
                            <p className='mx-3'>NEGRO (18)</p>
                            <p className='mx-3 '>AZUL (2)</p>
                            <p className='mx-3 '>CAFE (2)</p>
                            <p className='mx-3 '>ORO (2)</p>
                            <h6 className='mx-3 my-3'>TECNOLOGÍA</h6>
                            <p className='mx-3'>HPO2Flex(5)</p>
                            <p className='mx-3 '>AZUL (2)</p>
                            <p className='mx-3 '>BioBevel (2)</p>
                            <p className='mx-3 '>flexGroove (2)</p>
                        </div>

                    </div>

                </div>
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3  " >

                        {data.map(product => {
                            return (
                                <div key={product.nombre} className="col">
                                    <div className="card text-center ">
                                        <NavLink to={`/Producto/${product.nombre}`}>
                                            <img src={`./img/product/${product.foto}`} className="card-img-top mx-auto d-block" alt="..." />
                                        </NavLink>
                                        <div className="card-body d-grid gap-2 border-bottom">
                                            <h5 className="card-title">{product.nombre}</h5>
                                            <p className="card-text-comprar ">${product.precio}</p>

                                        </div>
                                    </div>

                                </div>


                            )
                        })}


                    </div>
                    <br />

                </div>
            </div>
            <Footer />
        </>
    )

};

export default Categoria;