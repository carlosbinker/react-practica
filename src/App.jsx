import './App.css'
import { Boton } from './components/Boton'
import { Item1 } from './components/Item1'
import { Item2 } from './components/Item2'
import { Item3 } from './components/Item3';
import { Item4 } from './components/Item4';


function App() {
  const prod = { nombre: "remera", precio: 10000, descripcion: "Remera de alto impacto deportivo" };
 
  return (
    <>
      <div>
        {/* // Autocierro el componente Boton porque no usa children */}
        {/* Le paso las props entre {} al componente Boton*/}
        <Boton texto={"Aceptar"} color={"green"} />
        <Boton texto={"Cancelar"} color={"red"} />
        <Item1 nombre={prod.nombre} precio={prod.precio} />
        <Item2 item={prod} />
        {/* Le paso las props por medio de un spread operator */}
        <Item3 {...prod} />
        {/* Monto el componente pero ahora con un style que se toma a partir de un opearador ternario. Se pasa true o false*/}
        <Item4 {...prod} destacado={false}  />
      </div>
    </>
  );
}

export default App
