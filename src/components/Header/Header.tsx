import { useLocation } from "react-router-dom"
import { useAppSelector } from "../../app/redux/hook"
import { HeaderLink } from "../HeaderLink/HeaderLink"
import styles from "./Header.module.css"

export const Header = () => {
	const isAuthentificated = useAppSelector(state => state.user.isAuthentificated)
	const pathname = useLocation().pathname
	return (
		<header className={styles.wrapper}>
			<HeaderLink href="/" isActive={pathname === "/"} text="Main page" />
			<HeaderLink href="/cards" isActive={pathname === "/cards"} text="Cards" />
			{isAuthentificated && <HeaderLink href="/profile" isActive={pathname === "/profile"} text="Profile" />}
			{!isAuthentificated && <HeaderLink href="/login" isActive={pathname === "/login"} text="Login" />}
		</header>
	)
}

function myFn(a: number, b: number): number
function myFn(a: string, b: string): string
function myFn(a: number | string, b: number | string): number | string | undefined {
	if (typeof a === "number" && typeof b === "number") return a + b
	if (typeof a === "string" && typeof b === "string") return a + b
}
