// Simplifico ItemListContainer, en vez del fetch usa la función getProducts
import { useEffect, useState, } from "react";
import { ItemList } from "../ItemList/ItemList";
// Importo usePArams para manejar las categorías 
import { useParams } from "react-router-dom";
import {getProducts} from "../../services/products/"
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
    
    const [products, setProducts] = useState([]);

    // Desestructuro lo que me viene por useParams y lo llamo category que podrá ser dulce o salado de acuerdo a la nav y
    // a la propiedad category dentro del array products.json en MOCKAPI!
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, [category]);
   
    return (

        <section className="container">
            <h1>{titulo}</h1>
            <ItemList list={products} /> 
        </section>
    );
}