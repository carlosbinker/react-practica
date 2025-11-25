import { useContext } from "react"
import { AuthContext } from "./AuthContext"

// Creo una función que lo que hace es exportar el hook useContext con nuestro Contexto de autenticación
export const useAuthContext = () => {
    return (
        useContext(AuthContext)
    );
};
