import React from 'react'
import styles from "..//Header/styles.module.css"

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>To-do List</h1>
        </div>
    )
}

export default Header