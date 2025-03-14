import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

{/* <motion.img
      src={myPhoto}
      alt="Padma Kumar"
      initial={{ x: "-100vw" }} 
      animate={{ x: 0 }} 
      transition={{ duration: 3, type: "spring" }}
      className="MyPicture"
    />  */}