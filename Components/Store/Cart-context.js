import React from "react"

const CartContext = React.createContext({
    item: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    updateItem: (item) => { }
})

export default CartContext