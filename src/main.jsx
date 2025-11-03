import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeEN from "./components/en/Home.jsx"
import HomePL from "./components/pl/Home.jsx"
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
    path: "pl/projects",
    element: <Navigate to="/pl/home" replace/>
  },{
    path: "pl",
    element: <Navigate to="/pl/home" replace/>
  },{
    path: "en",
    children:[
      {
        path: "home",
        element: <HomeEN/>
      },{
        path: "projects",
        children:[
          {
            path: "portfolio",
            element: <HomeEN/>
          }
        ]
      }
    ],
  },{
    path: "pl",
    children:[
      {
        path: "home",
        element: <HomePL/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
