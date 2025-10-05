export const Item = ({item}) => {
    return (
        <>
            
            {/* Utilizo una key para que cada article esté identificado de manera única en el dom y va en el padre! */}
            <article key={item.id}>
                <h2>{item.nombre}</h2>
                <p>Precio: {item.precio}</p>
                <p>Descripción: {item.descripcion}</p>
            </article>
        </>
    );
}