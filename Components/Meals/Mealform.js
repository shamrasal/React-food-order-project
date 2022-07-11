import React, { useContext } from 'react'
import classes from './Mealform.module.css'
import CartContext from '../Store/Cart-context'
const Mealform = (props) => {
    const ctx = useContext(CartContext)

    const addItemToCartHandler = (event) => {
        event.preventDefault()
        const quantity = document.getElementById('amount1').value
        ctx.addItem({ ...props.item, quantity: quantity, key: props.item.id })
    }
    return (
        <form className={classes.form}>
            <div className={classes.input}>
                <label>Amount</label>
                <input id='amount1'
                    type='number'
                    min={1}
                    max={5}
                    step={1}
                    defaultValue={1}
                >
                </input>
            </div>
            <button onClick={addItemToCartHandler}>+ Add</button>
        </form>
    )

}

export default Mealform