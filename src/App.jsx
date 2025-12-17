import "./App.css"
import {
  createHashRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom"
import { Homepage, Work, Personal, PersonalGallery, About } from "./pages"
import {
  Blueshell,
  RR,
  Website,
  Receiptify,
  Tubify,
  Rephoto,
  Basketball,
  Rags,
} from "./pages/work-pages"

function AppLayout() {
  const location = useLocation()
  const currentPath = location.pathname

  const getClassName = () => {
    if (currentPath === "/about") return "aboutme"
    if (currentPath === "/work" || currentPath.startsWith("/work/"))
      return "work"
    if (currentPath === "/personal" || currentPath.startsWith("/personal/"))
      return "personal"
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
      { path: "personal/gallery", element: <PersonalGallery /> },
      { path: "about", element: <About /> },
      { path: "work/blueshell", element: <Blueshell /> },
      { path: "work/rr", element: <RR /> },
      { path: "work/website", element: <Website /> },
      { path: "work/receiptify", element: <Receiptify /> },
      { path: "work/tubify", element: <Tubify /> },
      { path: "work/rephoto", element: <Rephoto /> },
      { path: "work/basketball", element: <Basketball /> },
      { path: "work/rags", element: <Rags /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
