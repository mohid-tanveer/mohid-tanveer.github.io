/** @format */

import "./App.css"
import {
  createHashRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom"
import { Homepage, Work, Personal, About } from "./pages"
import {
  Sentiment,
  Duckingautocorrect,
  Blueshell,
  Dijkstras,
  Racket,
  Hash,
  RR,
  Website,
  Receiptify,
} from "./pages/work-pages"

function AppLayout() {
  const location = useLocation()
  const currentPath = location.pathname

  const getClassName = () => {
    if (currentPath === "/about") return "aboutme"
    if (currentPath === "/work" || currentPath.startsWith("/work/"))
      return "work"
    if (currentPath === "/personal") return "personal"
    return ""
  }

  return (
    <div className={getClassName()}>
      <Outlet />
    </div>
  )
}

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "work", element: <Work /> },
      { path: "personal", element: <Personal /> },
      { path: "about", element: <About /> },
      { path: "work/sentiment", element: <Sentiment /> },
      { path: "work/duckingautocorrect", element: <Duckingautocorrect /> },
      { path: "work/blueshell", element: <Blueshell /> },
      { path: "work/dijkstras", element: <Dijkstras /> },
      { path: "work/racket", element: <Racket /> },
      { path: "work/hash", element: <Hash /> },
      { path: "work/rr", element: <RR /> },
      { path: "work/website", element: <Website /> },
      { path: "work/receiptify", element: <Receiptify /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
