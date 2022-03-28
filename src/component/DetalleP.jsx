import '../styles/css/producto.css';
import { NavLink } from 'react-router-dom';


const DetalleP = ({product}) => {    
      

    const nAleatorio = Math.floor(Math.random() * (product.length) + 1)
    let nAleatorio2, nAleatorio3, nAleatorio4

    if( nAleatorio2 === nAleatorio && nAleatorio2<= product.length)
    { nAleatorio2 = Math.floor(Math.random() * (product.length) + 1)}else { nAleatorio2 =nAleatorio+1}

    if( nAleatorio3 === nAleatorio2 && nAleatorio3<= product.length)
    { nAleatorio3 = Math.floor(Math.random() * (product.length) + 1)}else { nAleatorio3 =nAleatorio+2}

    if( nAleatorio4 === nAleatorio3 && nAleatorio4<= product.length)
    { nAleatorio4 = Math.floor(Math.random() * (product.length) + 1)}else { nAleatorio4 =nAleatorio+3}
        
    
    return (
        <>
            <div className="container my-5">
                <div className="encabezado">
                    <h5>DETALLES DEL PRODUCTO</h5>
                </div>
                <div className="content border-top">
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore asperiores aspernatur fuga eius saepe vel totam tempore illum nobis minus laboriosam harum error veniam, voluptate nostrum voluptatibus rerum dolores.
                        Iure ipsa, laborum at velit excepturi unde id dolorum sequi reiciendis illum voluptatem cupiditate eum officiis! Magnam adipisci, nesciunt nobis nulla culpa voluptatem vitae quis ducimus, soluta, illo nostrum veritatis!
                    </p>
                </div>

                <br />
                <div className="encabezado">
                    <h5>TECNOLOGÍAS</h5>
                </div>
                <div className="content border-top">
                    <p >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, necessitatibus voluptatibus rerum natus officia at reprehenderit officiis pariatur assumenda quam amet totam voluptate, iure et in repudiandae cupiditate porro perspiciatis?

                    </p>
                </div>
                <div className="encabezado-2 my-4" id='encabezado-2'>
                    <h5 className='mx-2'>COMPLETA TU LOOK</h5>
                </div>
                <div className="content">
                    <div className="col-md-12">
                        <div className="row row-cols-1 row-cols-md-4 " >
                            <div className="col">
                                <div className="card text-center">
                                    <NavLink to={`/Producto/${product.nombre}`}> 
                                        <img src={`./img/product/${nAleatorio}.jpg`} className="card-img-top mx-auto my-auto d-block" alt="..." />
                                    </NavLink>
                                    <div className="card-body d-grid gap-2 ">
                                        <h5  className="card-title">{product[nAleatorio]?.nombre}</h5>
                                        <p className="card-text-comprar ">${product[nAleatorio]?.precio}</p>
                                        <NavLink to="#" className="button-comprar">AGREGAR AL CARRITO</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center">
                                    <NavLink to={`/Producto/${product.nombre}`}> 
                                        <img src={`./img/product/${nAleatorio2}.jpg`} className="card-img-top mx-auto d-block" alt="..." />
                                    </NavLink>
                                    <div className="card-body d-grid gap-2">
                                        <h5  className="card-title">{product[nAleatorio2]?.nombre}</h5>
                                        <p className="card-text-comprar ">${product[nAleatorio2]?.precio}</p>
                                        <NavLink to="#" className="button-comprar">AGREGAR AL CARRITO</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center">
                                    <NavLink to={`/Producto/${product.nombre}`}> 
                                        <img src={`./img/product/${nAleatorio3}.jpg`} className="card-img-top mx-auto d-block" alt="..." />
                                    </NavLink>
                                    <div className="card-body d-grid gap-2">
                                        <h5  className="card-title">{product[nAleatorio3]?.nombre}</h5>
                                        <p className="card-text-comprar ">${product[nAleatorio3]?.precio}</p>
                                        <NavLink to="#" className="button-comprar">AGREGAR AL CARRITO</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center">
                                    <NavLink to={`/Producto/${product.nombre}`}> 
                                        <img src={`./img/product/${nAleatorio4}.jpg`} className="card-img-top mx-auto d-block" alt="..." />
                                    </NavLink>
                                    <div className="card-body d-grid gap-2">
                                        <h5  className="card-title">{product[nAleatorio4]?.nombre}</h5>
                                        <p className="card-text-comprar ">${product[nAleatorio4]?.precio}</p>
                                        <NavLink to="#" className="button-comprar">AGREGAR AL CARRITO</NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>

        </>
    );
};

export default DetalleP;