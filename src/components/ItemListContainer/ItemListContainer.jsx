// Arrow Function Snippets es una extención para escribir menos !
//Este componente va a ser un contenedor que tendrá una lista de componentes. 
//La idea es separar las responsabilidades. Que este componente no haga todas las funciones juntas
//1) Yo me encargo de pedir, 2) Yo me encargo de desarmar el palet 
//3) Yo me encargo de mostrarteló en la góndola en una card por ejemplo. Va haciendo como una especie de 'pasamanos'
//el componente 2 tendrá la responsabilidad de mapear que se va a mostrar o no. Tal vez no haya nada que mostrar
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemlistContainer = ({titulo}) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Hubo un problema al buscar productos");
                }
                return res.json();
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
            <ItemList lista={products} />
        </section>

    );
}