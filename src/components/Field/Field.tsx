import clsx from "clsx"
import { useState } from "react"
import styles from "./Field.module.css"

interface Props {
	label: string
	type: "text" | "number" | "date" | "tel"
	classname?: string
	id: string
	value: string
	disabled?: boolean
}

export const Field = ({ type, label, classname, id, value: defaultVakue, disabled }: Props) => {
	const [value, setValue] = useState(defaultVakue)
	const inputClassName = clsx(styles.input, classname)

	return (
		<div className={styles.wrapper}>
			<label htmlFor={id}>{`${label}`}</label>
			<input
				type={type}
				id={id}
				value={disabled ? "" : value}
				className={inputClassName}
				onChange={e => setValue(e.currentTarget.value)}
				name={id}
				disabled={disabled}
			/>
		</div>
	)
}
