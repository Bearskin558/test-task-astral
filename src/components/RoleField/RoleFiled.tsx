import { useState } from "react"
import { Role } from "../../app/types/user"
import styles from "./RoleFiled.module.css"

interface Props {
	value: string
}

export const RoleFiled = ({ value: defaultValue }: Props) => {
	const [value, setValue] = useState<Role>(defaultValue as Role)
	if (!(defaultValue === "admin" || defaultValue === "user")) return <p>Неверное значение</p>

	const onChangeHandler = (inputValue: string) => {
		if (inputValue === "admin" || inputValue === "user") setValue(inputValue)
	}
	return (
		<div className={styles.wrapper}>
			<label htmlFor="role">Role:</label>
			<select name="role" id="role" value={value} onChange={e => onChangeHandler(e.currentTarget.value)}>
				<option value="admin">Admin</option>
				<option value="user">User</option>
			</select>
		</div>
	)
}
