
import classes from './MealItems.module.css'
import Mealform from "./Mealform"

const MealItem = (props) => {
    const amount = `$ ${props.price}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{amount}</div>
            </div>
            <div>
                <Mealform />
            </div>
        </li>
    )
}

export default MealItem