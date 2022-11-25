import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import App from './App'
import './index.css'
import './Home.scss'
import "bootstrap/dist/js/bootstrap.bundle.min"

const App = React.lazy(()=>import("./App"))
const Places = React.lazy(()=>import("./Places"))

const router = createBrowserRouter([
  {path:"/" , element:<App/>, errorElement:<h1>Error</h1>},
  {path:"/places", element:<Places/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
