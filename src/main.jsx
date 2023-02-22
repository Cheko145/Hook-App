import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHook'

// import { CounterApp } from './01-useState/CounterApp'
// import { s } from './01-useState/CounterWhitCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
// import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Layout />
  //{/* </React.StrictMode>, */}
)
