import './App.css'
import { Boton } from './components/Boton'


function App() {
 
  return (
    <>
      <div>
        {/* // Autocierro el componente Boton porque no usa children */}
        {/* Le paso las props entre {} al componente Boton*/}
        <Boton texto={"Aceptar"} color={"green"} /> 
        <Boton texto={"Cancelar"} color={"red"} / > 
      </div>
      
    </>
  )
}

export default App
