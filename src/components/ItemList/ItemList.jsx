// La función de este componente intermedio será sólo la de ver si te mapeo algo o no 

import { preloadModule } from "react-dom";
import { Item } from "../Item/Item";

// Por lo tanto la presentación del artículo se le pasará al componente Item
export const ItemList = ({ lista }) => {
    return (
        <>
            {lista.length ? (
                lista.map((prod) => <Item key={prod.id} item={ prod} />)
                
            ) : <p>No hay productos</p>}
        </>
    );
}

