export const Item2 = ({ item }) => {
    
    return (
        <article>
            <p>Item 2</p>
            <p>{item.nombre}</p>
            <p>Precio: ${item.precio}</p>
        </article>
    )
};