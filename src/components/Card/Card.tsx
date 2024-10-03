import clsx from "clsx"
import { useState } from "react"
import styles from "./Card.module.css"

interface Props {
	title: string
	word: string
	translation: string
	example: string
}

export const Card = ({ title, word, translation, example }: Props) => {
	const [isRotate, setIsRotate] = useState(false)
	const classNameBack = clsx(styles.back, { [styles.rotate]: !isRotate })
	const classNameFront = clsx(styles.front, { [styles.rotate]: isRotate })
	return (
		<div className={styles.wrapper}>
			<div className={classNameFront}>
				<p className={styles.title}>{title}</p>
				<p className={styles.word}>{word}</p>
				<p>{example}</p>
				<button
					className={styles.button}
					onClick={() => setIsRotate(!isRotate)}
				>
					Узнать перевод
				</button>
			</div>
			<div className={classNameBack}>
				<p>Перевод:</p>
				<p>{translation}</p>

				<button
					className={styles.button}
					onClick={() => setIsRotate(!isRotate)}
				>
					Back
				</button>
			</div>
		</div>
	)
}
