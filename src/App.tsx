import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import store from "./app/redux/store"
import { router } from "./lib/router"

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
