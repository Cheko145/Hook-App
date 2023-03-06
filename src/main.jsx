import React from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter, createBrowserRouter,  RouterProvider,} from "react-router-dom";
// import { CallbackHook } from './06-Memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { MemoHook } from './06-Memos/MemoHook'
// import { FormWhitCustomHook } from './02-useEffect/FormWhitCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { s } from './01-useState/CounterWhitCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-Memos/Memorize'
// import { HooksApp } from './HooksApp'
// import { TodoApp } from './08-useReducer/TodoApp';
// import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  {/* <React.StrictMode> */}
    <MainApp />
  {/* </React.StrictMode> */}
</BrowserRouter>
)
