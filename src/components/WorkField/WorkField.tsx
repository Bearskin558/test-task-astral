import { useState } from "react"
import { Field } from "../index"
import styles from "./WorkField.module.css"

interface Props {
	experience: string
	workplace: string
}

export const WorkField = ({ experience: experienceDefault, workplace }: Props) => {
	const [experience, setExperience] = useState(experienceDefault)

	const onChangeExperienceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setExperience(e.currentTarget.id)
	}
	return (
		<div className={styles.wrapper}>
			<div>
				<p>Опыт работы:</p>
				<div>
					<input
						type="radio"
						id="none"
						name="experience"
						value={"none"}
						defaultChecked={experience === "none"}
						onChange={e => onChangeExperienceHandler(e)}
					/>
					<label htmlFor="none">Нет</label>
				</div>
				<div>
					<input
						type="radio"
						id="halfYear"
						name="experience"
						value={"halfYear"}
						defaultChecked={experience === "halfYear"}
						onChange={e => onChangeExperienceHandler(e)}
					/>
					<label htmlFor="halfYear">Полгода</label>
				</div>
				<div>
					<input
						type="radio"
						id="year"
						name="experience"
						value={"year"}
						defaultChecked={experience === "year"}
						onChange={e => onChangeExperienceHandler(e)}
					/>
					<label htmlFor="year">Год</label>
				</div>
			</div>

			<Field
				value={workplace}
				id="workplace"
				label="Место предыдущей работы:"
				type="text"
				disabled={experience === "none"}
			/>
		</div>
	)
}
