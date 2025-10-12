// La función de este componente intermedio será sólo la de ver si se mapea algo o no 

import { Item } from "../Item/Item";

// Por lo tanto la presentación del artículo se le pasará al componente Item
export const ItemList = ({ lista }) => {
    return (
        <>
            {lista.length ? (
                lista.map((prod) =>
                    <Item key={prod.id} {...prod}>
                        <button>Soy un botón</button>
                    </Item>)
                
            ) : <p>No hay productos</p>}
        </>
    );
}

