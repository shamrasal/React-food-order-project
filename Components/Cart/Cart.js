import classes from './Cart.module.css'
import Model from '../UI/Model'
const Cart = (props) => {
    const cartitem = <ul className={classes['cart-items']}> {[{
        id: 'cart1',
        name: 'sushi',
        amount: '2',
        price: '35.62'
    }].map((item) => <li>{item.name}</li>)}</ul>

    // const cartlist = cartitem.map((cart) => {
    //     return <li>{cart.name} {cart.amount}</li>
    // })
    return (
        <Model onClick={props.onHideCart}>
            {cartitem}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.40</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes['alt-button']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Model>
    )

}

export default Cart