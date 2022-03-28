import {  Routes, HashRouter, Route, link } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Categoria from './component/Categoria';
import Producto from './component/Producto';



function App() {
  return (
    <HashRouter>
    <>    
    
     <Routes>
       <Route path='/Home' element= {<Home/>} />
       <Route path='/Categorias' element={<Categoria/>} />  
       <Route path='/Producto/:nombre' element={<Producto/>} />  
       
    
   
     </Routes>
    
    
    </>
    </HashRouter>
  );
}

export default App;
