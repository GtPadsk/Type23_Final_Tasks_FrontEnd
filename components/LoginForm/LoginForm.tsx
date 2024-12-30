import React from 'react'
import cookie from 'js-cookie';
import axios from 'axios'
import styles from "@/components/LoginForm/styles.module.css"
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")

    const router = useRouter();

    const onLogin = async () => {
        setError("")

        try {

            const userData = {
                email: email,
                password: password,
            };

            const response = await axios.post
                ("http://localhost:3000/login",
                    userData,
                )

            if (response.status === 200) {
                cookie.set("jwt_token", response.data.token);
                router.push("/");
            } else if (response.status === 401) {
                setError("Invalid email or password. Please try again.");
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                if (err.response && err.response.status === 401) {
                    setError("Invalid email or password. Please try again.");
                } else {
                    setError("Something went wrong. Please try again later.");
                }
            } else {
                setError("An unknown error occurred.");
            }
            console.error(err);
        }
    }

    return (
        <div className={styles.wrapper}>
            <h4>v Login Here v</h4>
            <br />
            <input
                className={styles.input}
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <input
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button
                className={styles.button}
                onClick={onLogin}>
                Login
            </button>
            {error && (
                <div className={styles.error}>
                    {error}
                </div>
            )}
        </div>
    )
}

export default LoginForm