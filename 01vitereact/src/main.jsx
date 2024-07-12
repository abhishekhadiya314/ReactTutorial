import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {                                /*method1*/
    return (
        <div>
            <h1>Custom App | AH</h1>
        </div>
    )
    
}
// const reactElement = {                              /*method2*/
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }
const anotherElement = (                                /*method3*/
    <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "  chai aur React"                        /*method5*/

const reactElement = React.createElement(                 /*method4*/
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotherUser                                       /*method5*/
    
)
ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp/>                                         /*method1*/
    // anotherElement                                   /*method3*/
    reactElement                                     /*method2*/
    // reactElement                                     /*method4*/
//    < App/>
  
)


                                                // shortcut = npm run dev 
