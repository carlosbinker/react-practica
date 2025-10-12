import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemlistContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <>
      <div>
        <Header/> 
        <ItemlistContainer titulo={"Bienvenidos"}/>
        <Footer />
      </div>
    </>
  );
}

export default App
