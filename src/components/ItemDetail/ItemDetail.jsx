import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity });
  };

  return (
    // Si ustedes deciden NO reutilizar el componente item y acá hacer una sección totalmente nueva, pueden despreocuparse 
    // del link en ItemList.

    // En el caso de optar por la NO reutilización, pueden colocar el link envolviendo el <article> en Item y dejar como estaba el
    // ItemList, sin modificaciones.
    
    <Item {...detail}>
      <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />

      {/* <button onClick={() => {addItem(detail)}}>Enviar al carrito</button> */}
    </Item>
  );
};