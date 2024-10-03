import { Link } from "react-router-dom"
import styles from "./UnAuthorizedMessage.module.css"

export const UnAuthorizedMessage = () => {
	return (
		<div>
			<span>Чтобы просмотреть карточки, необходимо войти в аккаунт: </span>
			<Link
				to="/login"
				className={styles.link}
			>
				Войти
			</Link>
		</div>
	)
}
