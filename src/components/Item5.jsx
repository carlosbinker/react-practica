// Acá usamos children
// Es muy útil este componente si se lo usa como modal, que vendría a ser como un pop up
export const Item5 = ({ children }) => {
    return (
        <article>
            {children}
        </article>
    );
};

// Montaje: con doble etiqueta (apertura y cierre) de componente.
// dentro pasamos los elementos o componentes que necesitemos que se rendericen dentro
// La variable "prod" del ejemplo viene del objeto que teníamos declarado en App.jsx

/*<Item5>
    <h1>Este tiene children</h1>
    <p>{prod.nombre}</p>
    <p>{prod.precio}</p>
  </Item5> */