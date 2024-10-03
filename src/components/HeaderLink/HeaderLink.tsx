import clsx from "clsx"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

interface Props {
	isActive: boolean
	href: string
	text: string
}

export const HeaderLink = ({ isActive, href, text }: Props) => {
	const className = clsx(styles.link, { [styles.active]: isActive })
	return (
		<Link
			to={href}
			className={className}
		>
			{text}
		</Link>
	)
}
