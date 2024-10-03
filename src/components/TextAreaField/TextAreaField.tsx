import { useState } from "react"
import styles from "./TextAreaField.module.css"

interface Props {
	label: string
	id: string
	value: string
}

export const TextAreaField = ({ value: defaultValue, id, label }: Props) => {
	const [value, setValue] = useState(defaultValue)

	return (
		<div className={styles.wrapper}>
			<label htmlFor={id}>{label}</label>
			<textarea value={value} name={id} id={id} onChange={e => setValue(e.currentTarget.value)} />
		</div>
	)
}
