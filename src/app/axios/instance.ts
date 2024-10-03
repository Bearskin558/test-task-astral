import axios from "axios"

const api = axios.create({
	baseURL: "https://66fd2266c3a184a84d1934ed.mockapi.io",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
	},
})

export default api
