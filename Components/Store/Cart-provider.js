import React, { useState } from "react"
import CartContext from "./Cart-context"

const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const addItemHandler = (item) => {
        setItems((prevItems) => {
            return [...prevItems, item]
        })
        // cartContext.item.push(item)
        console.log(items)

    }

    const removeItemHandler = (id) => {

    }

    const cartContext = {
        item: items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext)}
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider