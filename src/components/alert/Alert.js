import React from 'react'
import css from './alert.module.css'

const Alert = () => {
    return (
        <div className={css.alertWrapper}>
            <p className={css.alertMessage}>AHTUNGЭ!</p>
            <p className={css.alertMessage}>DIS NAME IS HERE АЛРЭДИ</p>
        </div>
    )
}

export default Alert;