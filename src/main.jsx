import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import route from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './ContextProvider/ContextProvider.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={route}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
