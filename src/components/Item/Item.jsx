export const Item = ({id, nombre, precio, descripcion}) => {
    return (
        <>
            
            {/* Utilizo una key para que cada article esté identificado de manera única en el dom y va en el padre! */}
            <article key={id}>
                <h2>{nombre}</h2>
                <p>Precio: {precio}</p>
                <p>Descripción: {descripcion}</p>
            </article>
        </>
    );
}