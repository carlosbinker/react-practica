import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css"

export const Nav = () => {
  //Dejamos los Link preparados para cuando hagamos filtrado por categoria
  //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
  //en la barra de búsqueda

const { getTotalItems } = useCartContext();
  
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/salado"}>Salado</Link>
        </li>
        <li>
          <Link to={"/category/dulce"}>Dulce</Link>
        </li>
        <li>
          <Link to={"/carrito"}> Carrito 🛒 </Link>
          {getTotalItems() > 0 && (<span className="in-Cart">{getTotalItems()}</span>)}
        </li>
      </ul>
    </nav>
  );
};