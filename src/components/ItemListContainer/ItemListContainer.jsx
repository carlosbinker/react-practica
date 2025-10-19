// Arrow Function Snippets es una extención para escribir menos !
//Este componente va a ser un contenedor que tendrá una lista de componentes. Este componente tiene la lógica necesaria 
// para recibir un listado de elementos, en principio desde un Json local y luego a través de una API
//La idea es separar las responsabilidades. Que este componente no haga todas las funciones juntas
//1) Yo me encargo de pedir, 2) Yo me encargo de desarmar el palet 
//3) Yo me encargo de mostrarteló en la góndola en una card por ejemplo. Va haciendo como una especie de 'pasamanos' en cuanto 
// al manejo de las responsablidades. Resulta más sencillo luego encontrar un error.
//el componente 2 (ItemList) tendrá la responsabilidad de mapear lo que se va a mostrar o no. Tal vez no haya nada que mostrar
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({titulo}) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Hubo un problema al buscar productos");
                }
                return res.json(); // Retorno un objeto javascript que lo captura en el siguiente then con data
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // Recordar que en el useEffect debe estar aunque sea vacío como segundo argumento un array
    // IMPORTANTE: Itemlist no lo tenemos que tocar, seguirá haciendo lo que ya hacía!
   
    return (

        <section>
            <h1>{titulo}</h1>
            <ItemList list={products} /> // Le pasa los productos a ItemList para que se encargue de cómo mostrarlos 
        </section>

    );
}