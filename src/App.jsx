import './App.css'
import { Boton } from './components/Boton'
import { Item1 } from './components/Item1'
import { Item2 } from './components/Item2'
import { Item3 } from './components/Item3';
import { Item4 } from './components/Item4';
import { Item5 } from './components/Item5';
import { Item6 } from './components/Item6';

function App() {
  const prod = { nombre: "remera", precio: 10000, descripcion: "Remera de alto impacto deportivo" };
 
  return (
    <>
      <div>
        {/* // Autocierro el componente Boton porque no usa children */}
        {/* Le paso las props entre {} al componente Boton*/}
        <Boton texto={"Aceptar"} color={"green"} />
        <Boton texto={"Cancelar"} color={"red"} />
        <Item1 nombre={prod.nombre} precio={prod.precio} descripcion={prod.descripcion} />
        {/* Pasando el objeto prod en una props "item" */}
        <Item2 item={prod} />
        {/* Le paso las props por medio de un spread operator */}
        <Item3 {...prod} />
        {/* Monto el componente pero ahora con un style que se toma a partir de un opearador ternario. Se pasa true o false*/}
        <Item4 {...prod} destacado={false} />
        {/* Monto Item6 pasando directamente el objeto props de react */}
        <Item6 nombre={"Remera"} precio={5000} descripcion={"LALALA"} />
        <Item5>
          <p>Item 5</p>
          <h1>Este item tiene children</h1>
          <p>{prod.nombre}</p>
          <p>{prod.precio}</p>
          <button>Boton</button>
        </Item5>
      </div>
    </>
  );
}

export default App
