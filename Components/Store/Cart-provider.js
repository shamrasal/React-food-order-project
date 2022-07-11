import React, { useState } from "react"
import CartContext from "./Cart-context"

const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const addItemHandler = (item) => {
        setItems((prevItems) => {
            return [...prevItems, item]
        })
        // cartContext.item.push(item)
    }

    const removeItemHandler = (id) => {

    }

    const updateHandler = (item) => {
        setItems((prevItems) => {
            return [...prevItems]
        })
    }

    const cartContext = {
        item: items,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        updateItem: updateHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext.item)}
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider