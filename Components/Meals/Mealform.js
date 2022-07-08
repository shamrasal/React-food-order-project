import React, { useContext } from 'react'
import classes from './Mealform.module.css'
import CartContext from '../Store/Cart-context'
const Mealform = (props) => {
    const ctx = useContext(CartContext)
    const addItemToCartHandler = (event) => {
        event.preventDefault()
        ctx.addItem(props.item)
    }
    return (
        <form className={classes.form}>
            <div className={classes.input}>
                <label>Amount</label>
                <input type='number'
                    id='amount'
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