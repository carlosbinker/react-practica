// Como este componente va a envolve a la ruta del admin para permitir o no acceder al formulario de carga de productos, como
// envuelve es que recibe children.
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";

export const RutaProtegida = ({ children }) => {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to="/" replace />;
    };

    return children;

}