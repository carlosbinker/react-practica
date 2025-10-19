// Como 3° paso vamos a usar el Provider que le va a otorgar toda la funcionalidad, estados, etc., a nuestro contexto
// Le vamos a poner children a CartProvider porque recordemos que tiene que envolverse!

import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert(`${item.name} agregado`);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        if (cart.length) {
            return cart.length;
        }
    };

        const values = {cart, addItem, clearCart, getTotalItems };
        
        return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};