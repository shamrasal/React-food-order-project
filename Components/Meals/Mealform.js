import classes from './Mealform.module.css'
const Mealform = () => {
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
            <button>+ Add</button>
        </form>
    )

}

export default Mealform