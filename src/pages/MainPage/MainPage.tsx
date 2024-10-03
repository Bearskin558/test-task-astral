import styles from "./MainPage.module.css"

export const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<p>
				Привет, меня зовут Роман. Так как главная страница на усмотрение кандидата, то я решил здесь оставить пару
				ссылок на примеры своих работ:
			</p>
			<ul className={styles.list}>
				<li>
					<a
						href="https://biscuit-bakery-shop.ru/"
						target="_blank"
					>
						Кондитерская (обычный лендинг на Next.js)
					</a>
				</li>
				<li>
					<a
						href="https://next-pizza-two-black.vercel.app/"
						target="_blank"
					>
						Пиццерия (fullstack Next.js, Prisma, Next Auth)
					</a>
				</li>
			</ul>
		</div>
	)
}
