//recordamos el uso del children, no es obligatorio que esté
import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
    return (
        <>       
            {/* Utilizo una key para que cada article esté identificado de manera única en el dom y va en el padre! */}
            <article className="product-item">
               <img src={imageUrl} alt={description} /> 
                <h2 className="product-title">{name}</h2>
                <p>Precio: {price}</p>
                <p>Descripción: {description}</p>
                {children}
            </article>
        </>
    );
}