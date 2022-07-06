import React from "react"
import classes from './Header.module.css'
import mealsImage from '../../Assets/meals.jpg'
import Button from "../UI/HeaderCartButton"

const header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <Button>your cart 0 </Button>
            </header>
            <div className={classes['main-image']}>
                <img alt="img1" src={mealsImage}></img>
            </div>
        </React.Fragment >
    )
}
export default header