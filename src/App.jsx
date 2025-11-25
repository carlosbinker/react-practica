import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"
import { MainLayout } from "./layouts/MainLayout"
import { AdminLayout } from "./layouts/AdminLayout"
import { Login } from './components/Login/Login';

function App() {
  
// Incorporo BrowseRouter, Routes (que sería el switch) y Routes
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          {/* <div> */}
                {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar. Acá fue el header*/}
            <Routes>

              <Route element={<MainLayout/>}>
                <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"}/>}/>
                <Route path="/detail/:id" element={<ItemDetailContainer />} />  
                <Route path="/carrito" element={<Cart />} />
                <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos"} />} />
              </Route>
                
              {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
              
              <Route path="/admin" element={<AdminLayout/>}>
              {/*Ruta anidada va sin la / y el index indica que al escribir /admin el primer componente que se monta es el Login*/}
                <Route index element={<Login/> } />
                <Route path="alta-productos" element={
                  <RutaProtegida>
                    <ProductFormContainer />
                  </RutaProtegida>
                }/>
              </Route>

            </Routes>
                {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar. Acá fue el footer */} 
          {/* </div>  */}
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
