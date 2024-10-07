import { useLocation } from "react-router-dom"
import { useAppSelector } from "../../app/redux/hook"
import { HeaderLink } from "../HeaderLink/HeaderLink"
import styles from "./Header.module.css"

export const Header = () => {
	const isAuthentificated = useAppSelector(state => state.user.isAuthentificated)
	const pathname = useLocation().pathname
	return (
		<header>
			<nav className={styles.wrapper}>
				<HeaderLink href="/" isActive={pathname === "/"} text="Main page" />
				<HeaderLink href="/cards" isActive={pathname === "/cards"} text="Cards" />
				{isAuthentificated && <HeaderLink href="/profile" isActive={pathname === "/profile"} text="Profile" />}
				{!isAuthentificated && <HeaderLink href="/login" isActive={pathname === "/login"} text="Login" />}
			</nav>
		</header>
	)
}
