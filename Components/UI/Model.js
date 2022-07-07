import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Model.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModelOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const placeCart = document.getElementById('overlay')

const Model = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop></Backdrop>, placeCart)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, placeCart)}
        </React.Fragment>
    )
}

export default Model