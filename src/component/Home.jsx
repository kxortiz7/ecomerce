import '../styles/css/home.css';
import img23 from '../assets/img/home/23.png';
import img24 from '../assets/img/home/24.jpg';
import img25 from '../assets/img/home/25.jpg';
import img26 from '../assets/img/home/26.png';
import img27 from '../assets/img/home/27.png';
import imgh1 from '../assets/img/home/1.jpg';
import imgm1 from '../assets/img/home/2.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';







const Home = () => {


    return (
        <>
            <Navbar />           
            <div className="card-group-fluid">
                <div className="card">
                    <img src={img23} className="card-img-top" alt="..." />                    
                </div>

            </div>

            <div className="card-group" id='img-contenedor'>
                <div className="card mt-5" id='card-group-1'>
                    <img src={img24} className="card-img-top" alt="..." height={500} />
                    <NavLink to="/Categorias">
                    <button className='d-block'>HOMBRE</button></NavLink>
                </div>

                <div className="card mt-5" id='card-group-2'>
                    <img src={img25} className="card-img-top" alt="..." height={500} />
                    <button className='position-absolute'>MUJER</button>
                </div>
            </div>

            <div className="card-group">
                <div className="card" id='card-group-3'>
                    <img src={img26} className="card-img-top mt-3" alt="..." />                  
                                        
                </div>
            </div>

            <div className="card-group mx-5">
                <div className="card" id='card-group-4'>
                    <img src={img27} className="card-img-top mx-2 " alt="..." />
                    <NavLink to="/Categorias">
                    <button className='d-block'>ACCESORIOS</button></NavLink>
                </div>

                <div className="card mt-2 " id='card-group-5'>
                    <img src={imgh1} className="card-img-top mx-2 mb-2" alt="..." />
                    <NavLink to="/Categorias">
                    <button className='link-img-5-1'>HOMBRE</button></NavLink>
                    <img src={imgm1} className="card-img-top mx-2 mb-2" alt="..." />
                    <NavLink to="/Categorias">
                    <button className='link-img-5-2'>MUJER</button></NavLink>
                </div>

            </div>

            
            <Footer />


        </>
    );
};

export default Home;