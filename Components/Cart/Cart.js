import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model'
import CartContext from '../Store/Cart-context'
import CartItem from './CartItem'
const Cart = (props) => {
    const ctx = useContext(CartContext)

    console.log(ctx.item.quantity)
    const hasItem = ctx.item.length > 0
    const decreaseItemCountHandler = (item) => {
        if (item.quantity < 1) {
            return
        } else {
            item.quantity = +item.quantity - 1
            ctx.updateItem(item)
        }
    }

    const increseItemCountHandler = (item) => {
        item.quantity = +item.quantity + 1
        // console.log(props)
        ctx.updateItem(item)
        // setquantity({

        // })

        // setquantity(item.quantity)
    }
    const cartitem = <ul className={classes['cart-items']}> {ctx.item.map((item) => <CartItem
        id={Math.random()}
        name={item.name}
        key={Math.random()}
        amount={item.quantity}
        price={item.price}
        onAdd={increseItemCountHandler.bind(null, item)}
        onRemove={decreaseItemCountHandler.bind(null, item)}
    />)}</ul>

    let totalAmount = 0
    ctx.item.map((item) => {
        totalAmount = totalAmount + (+item.price * item.quantity)
    })
    // const cartlist = cartitem.map((cart) => {
    //     return <li>{cart.name} {cart.amount}</li>
    // })
    return (
        <Model onClick={props.onHideCart}>
            {cartitem}
            <div className={classes.total}>
                <span>total amount</span>
                <span>{`$${totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes['alt-button']}>close</button>
                {hasItem && <button className={classes.button}>order</button>}
            </div>
        </Model>
    )
}

export default Cart