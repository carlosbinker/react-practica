export const Item6 = (props) => {
    const { nombre, precio, descripcion } = props;

    return (
        <article>
            <p>Item 6</p>
            <p>{nombre}</p>
            <p>{precio}</p>
            {/* <p>{ descripcion}</p> */}
        </article>
    );
};

//Montaje: pasamos las props independientes que se guardan en el objeto "props" de react
//<Item6 nombre={"Remera"} precio={5000}/>