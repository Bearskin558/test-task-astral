import { CardType } from "../types/cards"
import api from "./instance"

export const getAllCards = () => api.get<CardType[]>("/cards")
