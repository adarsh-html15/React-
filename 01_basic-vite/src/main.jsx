import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    content:"click on me to navigate"
}

const AnotherElement = (
  <a href="https://google.com" >Hello click me</a>
)
const myname = "Adarsh maurya the boss"
const ReactElm = React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    }, 'Clivk on me to navigate',myname
)

createRoot(document.getElementById('root')).render(
    <App />

    // <AnotherElement />
    // AnotherElement()
    //wrong

    // right
    // AnotherElement
    // ReactElm

    
)
