export const Item4 = ({ nombre, precio, destacado }) => {

    return (
        <article style={{ border: destacado ? "solid gold" : "solid gray" }} >
            
            <p>Item 4</p>
            <p>{nombre}</p>
            <p>{precio}</p>

        </article>

    );

};
