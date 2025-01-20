import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket } = useSocket('https://huggopanel.online')

    return (
        <SocketContext.Provider value={{ socket }}>
            { children }
        </SocketContext.Provider>
    )
}