import React, { useContext } from 'react'
import classes from './MealItems.module.css'
import Mealform from "./Mealform"
import CartContext from '../Store/Cart-context'

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const amount = `$ ${props.price.toFixed(2)}`
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{amount}</div>
            </div>
            <div>
                <Mealform id={props.id} item={props} onClick={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem