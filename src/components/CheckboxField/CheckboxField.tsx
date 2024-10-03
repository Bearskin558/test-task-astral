import { useState } from "react"
import styles from "./CheckboxField.module.css"

interface Props {
	label: string
	id: string
	value: boolean
}

export const CheckboxField = ({ label, id, value: defaultValue }: Props) => {
	const [value, setValue] = useState(defaultValue)
	return (
		<div className={styles.wrapper}>
			<label htmlFor={id}>{label}</label>
			<input
				type="checkbox"
				id={id}
				checked={value}
				name={id}
				value={String(value)}
				onChange={e => setValue(e.currentTarget.checked)}
			/>
		</div>
	)
}
