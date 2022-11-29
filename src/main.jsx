import React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import App from './App'
import './index.css'
import './Home.scss'
import "bootstrap/dist/js/bootstrap.bundle.min"

const App = React.lazy(() => import("./App"))
const Places = React.lazy(() => import("./Places"))
const Page404 = React.lazy(() => import("./404"))

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Page404 /> },
  { path: "/places", element: <Places /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
