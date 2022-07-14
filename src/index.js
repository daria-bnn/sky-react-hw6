import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Basket from './components/basket/basket'
import LoginPass from './components/login-pass/login-pass'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Basket />
    <LoginPass />
  </React.StrictMode>
)
