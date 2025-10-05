// Arrow Function Snippets es una extención para escribir menos !
//Este componente va a ser un contenedor que tendrá una lista de componentes. 
//La idea es separar las responsabilidades. Que este componente no haga todas las funciones juntas
//1) Yo me encargo de pedir, 2) Yo me encargo de desarmar el palet 
//3) Yo me encargo de mostrarteló en la góndola en una card por ejemplo. Va haciendo como una especie de 'pasamanos'
//el componente 2 tendrá la responsabilidad de mapear que se va a mostrar o no. Tal vez no haya nada que mostrar

export const ItemlistContainer = ({ titulo, productos }) => {
    
    //estado

    // Llamada a una API o a un JSON local

    return (

        <section>
            <h1>{titulo}</h1>
            {/* Defino un ternario */}
            {productos.length ? (
                
                productos.map((prod) => (
                    // Utilizo una key para que cada article esté identificado de manera única en el dom
                    <article key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <p>Precio: {prod.precio}</p>
                        <p>Descripción: { prod.descripcion}</p>
                    </article>))
                ) : <p>No hay productos</p>}
        </section>

    );
}