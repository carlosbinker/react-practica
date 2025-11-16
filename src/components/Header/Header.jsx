import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

// Acá se opta por poner la nav dentro del header
export const Header = () => {
    return (<header>
        <Link to={"/"}>LOGO</Link>
        <Nav />
    </header>);
};