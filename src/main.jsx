import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Here we will import bootstrap

// import { UserContext } from './Context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <App/>
  
  </StrictMode>,
)
