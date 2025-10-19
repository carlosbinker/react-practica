// Aquí creamos el hook personalizado (2° paso)

import { useContext } from "react" // Importo el hook para el manejo del contexto
import { CartContext } from "./CartContext" // CartContext es el contexto del carrito con sus métodos

export const useCartContext = () => {
  return useContext(CartContext) // Retornamos el contexto del carrito para usarlo en los componentes que lo requieran
};