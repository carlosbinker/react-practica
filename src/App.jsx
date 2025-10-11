import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ItemlistContainer } from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
import Form from './components/Form/Form';
import { Boton } from './components/Boton';
import EjemploMouse from './components/EjemploMouse';
import EjemploMouse2 from './components/EjemploMouse2';

function App() {
  
  //PROVISORAMENTE uso este array como si fuese un estado
   const arrayProductos = [
    {
      id: 1,
      nombre: "Remera",
      precio: 20000,
      descripcion: "Remera de algodon",
    },
    {
      id: 2,
      nombre: "Pantalon",
      precio: 80000,
      descripcion: "Pantalon de jean",
    },
    {
      id: 3,
      nombre: "zapatillas",
      precio: 110000,
      descripcion: "Zapatillas deportivas",
    },
  ];
  //const prod = { nombre: "Remera", precio: 10000, descripcion: "LALALA" };
 
  return (
    <>
      <div>
        {/* Hacemos el autoclose de los componenetes porque no hay childrens */}
        <Header /> 
        {/* <ItemlistContainer
          titulo={"Bienvenidos a la tienda de Embark"}
          productos={arrayProductos}
        /> */}
        <Contador />
        {/* <Form /> */}
        <Boton texto={"Soy un botón GIL!"} color={"red"} />
        <EjemploMouse2/>
        <Footer />
      </div>
    </>
  );
}

export default App
