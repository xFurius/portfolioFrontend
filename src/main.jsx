import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./components/en/Home.jsx"
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/en/home" replace/>
  },{
    path: "en/projects",
    element: <Navigate to="/en/home" replace/>
  },{
    path: "en",
    element: <Navigate to="/en/home" replace/>
  },{
    path: "en",
    children:[
      {
        path: "home",
        element: <Home/>
      },{
        path: "projects",
        children:[
          {
            path: "portfolio",
            element: <Home/>
          }
        ]
      }
    ],
  },{
    path: "/pl/home",
    element: <Home/>,
    // children:[
    //   {
    //     path: "home",
    //     element: <Home/>,
    //   }
    // ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
