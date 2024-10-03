import styles from "./Footer.module.css"

interface Props {
	items: string[]
}

export const Footer = ({ items }: Props) => {
	return (
		<footer className={styles.wrapper}>
			<ul className={styles.items}>
				{items.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</footer>
	)
}
