//Este componente primero fue utilizado sin "descripcion" ni "children".
//Se vio la diferencia de cómo tenia que modificar el componente y su montaje
//el objeto ahora incluye otros atributos y los quiero usar
//Fue comparado con "Item3" que al pasar props con spread operator {...prod}
//no necesitaba modificar el montaje, sino sólo agregar la props "descripcion"

export const Item1 = ({ nombre, precio, descripcion, children }) => {
    
    return (
        
        <article>

        <p>Item 1</p>
        <p>{nombre}</p>
        <p>Precio: $ {precio}</p>
        <p>Descripcion: {descripcion}</p>
            
        {children}

    </article>)
    
};

//Monteje inicial (sin descripcion ni children)
//<Item1 nombre={"Remera"} precio={5000} />;

//Montaje con variable "prod"
//<Item1 nombre={prod.nombre} precio={prod.precio} descripcion={prod.descripcion} />;

//Montaje con children
/*<Item1 nombre={prod.nombre} precio={prod.precio} descripcion={prod.descripcion}>
  <button>un boton</button>
 </Item1>; */