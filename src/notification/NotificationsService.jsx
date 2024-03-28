import { createContext, useState } from "react";


const Notification = ({notificationData}) => {

    const colors ={
        Success: 'green',
        Error: 'red',
        Warning: 'orange',
        Info: 'blue'
    }


    const noticationStyle = {
      position: 'absolute',
      top: 100,
      right: 10,
      width: 250 ,
      backgroundColor: colors[notificationData.type],
      color: 'white',
      padding: 20,
      borderRadius: 5
    }
  
  
    return (
      <article style={noticationStyle}>
        <h3>{notificationData.type.toUpperCase()}</h3>
        {notificationData.text}
      </article>
    )
  }

export const NotificacionContext = createContext()

export const NotificacionProvider = ({ children }) => {

    const [notificationData, setNotificationData] = useState({
        type: 'Success',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationData({ type, text })
        setTimeout(() => {
            setNotificationData (prev => ({...prev, text: ''}))
        }, 4000)
    }



    return (
        <NotificacionContext.Provider value={{ showNotification }}>
            {notificationData.text && <Notification notificationData={notificationData}/>}
            {children}
        </NotificacionContext.Provider>
    )
}


