import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <h2>I am learning React from Chai aur Code</h2>
//   )
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Visit google",
// };

const anotherElement = (
  <a href="https://google.com" target = "_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https:/google.com', target: '_blank'},
  'Click me to visit google directly'
)

createRoot(document.getElementById('root')).render(
  // MyApp(),
  
  // anotherElement,
  // reactElement

  <StrictMode>
    <App />
  </StrictMode>
)
