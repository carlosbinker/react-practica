import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

// Acá se opta por poner la nav dentro del header
export const Header = () => {
    return (<header>
        <Link to={"/"}><h1>Restaurante de comidas rápidas</h1></Link>
        <Nav />
    </header>);
};