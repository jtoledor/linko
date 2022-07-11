import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ListaProductos from './views/ListaProductos';
import DetalleProducto from './views/DetalleProducto';
    

function App() {
  return (
    <>
    {/** Se crea las rutas donde renderiza el componente que esta ligado a cada ruta */}
    <BrowserRouter >
        <Routes>
          <Route exact path='/products' element={<ListaProductos />}/>
          <Route exact path='/products/:id' element={<DetalleProducto />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
