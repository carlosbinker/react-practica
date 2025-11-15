// Como 3° paso vamos a usar el Provider que le va a otorgar toda la funcionalidad, estados, etc., a nuestro contexto
// Le vamos a poner children a CartProvider porque recordemos que tiene que envolverse!

import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Cambiamos la lógica de las funciones si usamos el Count para agregar "cantidad"

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };

    /*******************************************************************************************************************/
    /*                                              Agregar map y spread                                               */
    /*******************************************************************************************************************/

    const addItem = (item) => {
        if (exists(item.id)) {
            //Con map, cuido mutación a nivel del array
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    // Con spread, Cuido mutación a nivel de objeto
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            alert("Agregado al carrito");
        } else {
            setCart([...cart, item]);
            alert(`${item.name} agregado`);
        }
    };

    /*******************************************************************************************************************/
    /*                                      Eliminar producto con filter                                               */
    /*******************************************************************************************************************/

    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id);
        setCart(filtered);
        alerte("Producto eliminado");
    };
    
    /*******************************************************************************************************************/
    /*                                              Vaciar carrito                                                     */
    /*******************************************************************************************************************/
    const clearCart = () => {
        setCart([]);
    };

    /*******************************************************************************************************************/
    /*                                      Calcular total de items en carrito                                         */
    /*******************************************************************************************************************/
    
    const getTotalItems = () => {
        // if (cart.length) {
        //     return cart.length;
        // }
        // reduce le suma al acumulador p.quantity partiendo desde 0
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    /*******************************************************************************************************************/
    /*                                                  Calcular total                                                 */
    /*******************************************************************************************************************/
    
    const total = () => {
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return Math.round(total * 100) / 100;
    }


    console.log(cart);

        const values = {cart, addItem, clearCart, getTotalItems, deleteItem, total };
        
        return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};