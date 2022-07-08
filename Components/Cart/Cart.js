import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model'
import CartContext from '../Store/Cart-context'
import CartItem from './CartItem'
const Cart = (props) => {
    const ctx = useContext(CartContext)
    console.log(ctx.item.price)
    const cartitem = <ul className={classes['cart-items']}> {ctx.item.map((item) => <CartItem name={item.name} amount={item.amount} price={item.price} />)}</ul>

    let totalAmount = 0
    ctx.item.map((item) => {
        totalAmount = totalAmount + +item.price
    })


    // const cartlist = cartitem.map((cart) => {
    //     return <li>{cart.name} {cart.amount}</li>
    // })
    return (
        <Model onClick={props.onHideCart}>
            {cartitem}
            <div className={classes.total}>
                <span>total amount</span>
                <span>{`$${totalAmount}`}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes['alt-button']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Model>
    )

}

export default Cart