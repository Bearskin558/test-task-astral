import { useEffect, useState } from "react"
import { getAllCards } from "../../app/axios/cards"
import { useAppSelector } from "../../app/redux/hook"
import { CardType } from "../../app/types/cards"
import { Card, UnAuthorizedMessage } from "../../components/index"
import styles from "./CardsPage.module.css"

export const CardsPage = () => {
	const isAuthentificated = useAppSelector(state => state.user.isAuthentificated)
	const [cards, setCards] = useState<CardType[]>([])

	if (!isAuthentificated) {
		return <UnAuthorizedMessage />
	}
	useEffect(() => {
		const fetchCards = async () => {
			const responseCards = await getAllCards()
			if (responseCards.status === 200) setCards(responseCards.data)
		}
		fetchCards()
	}, [])
	return (
		<div className={styles.cardContainer}>
			{cards.map(card => (
				<Card
					{...card}
					key={card.id}
				/>
			))}
		</div>
	)
}
