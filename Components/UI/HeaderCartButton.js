import React, { useContext } from "react"

import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon"
import CartContext from "../Store/Cart-context"

const Button = (props) => {
    const chartCtx = useContext(CartContext)
    const totalNumberOfItems = chartCtx.item.length
    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalNumberOfItems}</span>
        </button>
    )
}

export default Button