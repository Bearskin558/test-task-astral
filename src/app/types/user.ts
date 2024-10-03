export interface User {
	id: number
	login: string
	password: string
	name: string
	surname: string
	gender: string
	age: number
	education: string
	birthdayDate: Date
	role: Role
	bio: string
	company: string
	removal: Removal
	country: string
	language: string
	hardSkills: string
	softSkills: string
	address: string
	phone: string
	telegram: string
	experience: Experience
	university: string
	workplace: string
}
export type Experience = "year" | "halfYear" | "none"
export type Role = "user" | "admin"
export type Removal = 0 | 1
