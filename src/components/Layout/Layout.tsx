import { Outlet } from "react-router-dom"
import { Header, Footer } from "../index"
import styles from "./Layout.module.css"

export const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.container}>
				<Outlet />
			</main>
			<Footer items={["telegram", "vk", "youtube"]} />
		</div>
	)
}
