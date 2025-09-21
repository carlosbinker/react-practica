import './App.css'
import { Boton } from './components/Boton'
import { Item1 } from './components/Item1'
import { Item2 } from './components/Item2'


function App() {
  const prod = { nombre: "remera", precio: 10000 };
 
  return (
    <>
      <div>
        {/* // Autocierro el componente Boton porque no usa children */}
        {/* Le paso las props entre {} al componente Boton*/}
        <Boton texto={"Aceptar"} color={"green"} />
        <Boton texto={"Cancelar"} color={"red"} />
        <Item1 nombre={"pantalon"} precio={5000} />
        <Item2 item={prod} />
      </div>
    </>
  );
}

export default App
