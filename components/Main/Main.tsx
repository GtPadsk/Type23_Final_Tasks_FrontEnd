import React from 'react'
import styles from "./styles.module.css"

const Main = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.description}>Add, edit and delete your tasks</p>
                <input type="text" placeholder='Add a task' className={styles.input} />
                <button className={styles.loader}></button>
            </div>
        </>
    )
}

export default Main