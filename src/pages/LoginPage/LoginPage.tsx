import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserById } from "../../app/axios/user"
import { useAppDispatch } from "../../app/redux/hook"
import { setIsAuthentificated } from "../../app/redux/userSlice"
import styles from "./LoginPage.module.css"

export const LoginPage = () => {
	const [isError, setIsError] = useState(false)
	const inputLoginRef = useRef<HTMLInputElement>(null)
	const inputPasswordRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const onClickSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		const userResponse = await getUserById("1")
		if (userResponse.status === 200) {
			const { login, password } = userResponse.data
			if (login === inputLoginRef.current?.value && password === inputPasswordRef.current?.value) {
				dispatch(setIsAuthentificated(true))
				navigate("/profile")
			} else {
				setIsError(true)
			}
		}
	}

	return (
		<div className={styles.wrapper}>
			<form
				action=""
				className={styles.loginForm}
			>
				<div>
					<label htmlFor="login">Логин:</label>
					<input
						type="text"
						id="login"
						ref={inputLoginRef}
					/>
				</div>
				<div>
					<label htmlFor="password">Пароль:</label>
					<input
						type="password"
						id="password"
						ref={inputPasswordRef}
					/>
				</div>
				<button
					className={styles.signinButton}
					type="submit"
					onClick={e => onClickSubmitHandler(e)}
				>
					Войти
				</button>
				{isError && <p>Неверный логин или пароль</p>}
			</form>
		</div>
	)
}
