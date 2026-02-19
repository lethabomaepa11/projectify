import axios from "axios"

export const getAxiosInstance = () => {
    return axios.create({
        baseURL: `https://${import.meta.env.VITE_MOCK_API_SECRET}.mockapi.io/api`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}