import { User } from "../types/user"
import api from "./instance"

export const getAllUsers = () => api.get<User[]>(`/users`)
export const getUserById = (id: string) => api.get<User>(`/users/${id}`)
export const postUser = (data: { [key: string]: FormDataEntryValue }) => api.post<User>(`/users`, data)
