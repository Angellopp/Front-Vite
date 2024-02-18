/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { QueryClientProvider, QueryClient } from 'react-query'
import './index.css'

import {router} from './Routers/index.jsx'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //<QueryClientProvider client={queryClient}>
  // <userContext.Provider value={}>
    <RouterProvider router={router}/>
  // </userContext.Provider>    
  //</QueryClientProvider>
  // </React.StrictMode>
)
