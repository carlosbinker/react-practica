import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Valor del contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}> <h3>Incrementar</h3> </button>
        </div>
    );
}

export default Contador;