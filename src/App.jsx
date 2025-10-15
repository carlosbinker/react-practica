import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemlistContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  
// Incorporo BrowseRouter, Routes (que sería el switch) y Routes
  return (
    <>
      <BrowserRouter>
        <div>
          <Header /> 
          <Routes>
            <Route path="/" element={<ItemlistContainer titulo={"Bienvenidos"}/>}/>
            <Route path="/detail/:id" element={<ItemDetailContainer/>}/>             
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
