import { useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllUsers, getUserById } from "../../app/axios/user"
import { useAppSelector } from "../../app/redux/hook"
import { User } from "../../app/types/user"
import { EditView } from "../../components"
import styles from "./ProfilePage.module.css"

export const ProfilePage = () => {
	const isAuthentificated = useAppSelector(state => state.user.isAuthentificated)
	const navigate = useNavigate()
	const [user, setUser] = useState<User>()

	useEffect(() => {
		if (!isAuthentificated) {
			navigate("/login")
		}
		const fetchUser = async () => {
			try {
				const responseUser = await getAllUsers()
				if (responseUser.status === 200) {
					responseUser.data
					setUser(responseUser.data.at(-1))
				}
			} catch (error) {
				console.log(error)
			}
		}
		if (isAuthentificated) fetchUser()
	}, [])

	if (!user) return <p>Загрузка...</p>

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Профиль</h2>
			<EditView {...user} />
		</div>
	)
}
