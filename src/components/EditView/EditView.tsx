import { useRef, useState } from "react"
import { putUser } from "../../app/axios/user"
import { User } from "../../app/types/user"
import { CheckboxField, Field, RoleFiled, TextAreaField, WorkField } from "../index"
import styles from "./EditView.module.css"

type Props = Omit<User, "password" | "id" | "login">

export const EditView = ({
	name,
	surname,
	gender,
	age,
	education,
	birthdayDate,
	role,
	bio,
	company,
	removal,
	country,
	language,
	hardSkills,
	softSkills,
	address,
	phone,
	telegram,
	experience,
	university,
	workplace,
}: Props) => {
	const [isSuccess, setIsSuccess] = useState(false)
	const [isError, setIsError] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)
	const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		try {
			if (formRef.current) {
				const formData = new FormData(formRef.current)
				const data = Object.fromEntries(formData)
				if (!("removal" in data)) data.removal = "false"
				console.log(data)
				const response = await putUser(data)
				if (response.status === 200) {
					setIsSuccess(true)
					setTimeout(() => setIsSuccess(false), 2000)
				} else {
					setIsError(true)
					setTimeout(() => setIsError(false), 2000)
				}
			}
		} catch (error) {
			console.log(error)
			setIsError(true)
			setTimeout(() => setIsError(false), 2000)
		}
	}

	return (
		<form className={styles.form} ref={formRef}>
			<Field value={name} label="Имя:" id="name" type="text" />
			<Field value={surname} label="Фамилия:" id="surname" type="text" />
			<WorkField experience={experience} workplace={workplace} />
			<Field value={gender} label="Пол:" id="gender" type="text" />
			<CheckboxField value={Boolean(removal)} id="removal" label="Готовность переехать:" />
			<Field value={age + ""} label="Возраст:" id="age" type="number" />
			<Field value={education} label="Образование:" id="education" type="text" />
			<Field value={birthdayDate + ""} label="Дата рождения:" id="birthdayDate" type="date" />
			<Field value={bio} label="Bio:" id="bio" type="text" />
			<Field value={company} label="Компания:" id="company" type="text" />
			<Field value={address} label="Адрес:" id="address" type="text" />
			<RoleFiled value={role} />
			<TextAreaField value={hardSkills} id="hardSkills" label="Hard skills:" />
			<TextAreaField value={softSkills} id="softSkills" label="Soft skills:" />
			<Field value={country} label="Страна:" id="country" type="text" />
			<Field value={language} label="Язык:" id="language" type="text" />
			<Field value={phone} label="Телефон:" id="phone" type="tel" />
			<Field value={telegram} label="Telegram:" id="telegram" type="text" />
			<Field value={university} label="Университет:" id="university" type="text" />
			<button type="submit" onClick={e => onSubmitHandler(e)} className={styles.button}>
				Изменить
			</button>
			{isSuccess && <p className={styles.message}>Данные успешно изменены</p>}
			{isError && <p className={styles.errorMessage}>Непредвиденная ошибка</p>}
		</form>
	)
}
