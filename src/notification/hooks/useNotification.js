import { useContext } from "react"
import { NotificacionContext } from "../NotificationsService"

export const useNotification = () => {
    return useContext(NotificacionContext)
}