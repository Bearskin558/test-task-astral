import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../components"
import { CardsPage, MainPage, ProfilePage, LoginPage } from "../pages/index.ts"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <MainPage /> },
			{ path: "/cards", element: <CardsPage /> },
			{ path: "/profile", element: <ProfilePage /> },
			{ path: "/login", element: <LoginPage /> },
		],
	},
])
