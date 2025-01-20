import ReactDOM from 'react-dom/client'
import { UserDataProvider } from './context/UserDataContext'
import { SocketProvider } from './context/SocketContext'
import { ModeLiveProvider } from './context/ModeLiveContext'
import { Layout } from './components/layout/Layout'
import {NextUIProvider} from "@nextui-org/react";
import styles from './index.module.css'
import './tailwindcss.css'
// export const Main = () => (

//     <UserDataProvider>
//       <ModeLiveProvider>
//         <Layout />
//       </ModeLiveProvider>
//     </UsPerDataProvider>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  <NextUIProvider>
    <SocketProvider>
      <UserDataProvider>
        <ModeLiveProvider>
          <div className={styles}>
            <Layout />
          </div>
        </ModeLiveProvider>
      </UserDataProvider>
    </SocketProvider>
  </NextUIProvider>
)
