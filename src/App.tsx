import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Forgot } from "./pages/Forgot";
import { Goals } from "./pages/Goals";
import { About } from "./pages/About";
import { Credits } from "./pages/Credits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/credits",
    element: <Credits/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/forgotpassword",
    element: <Forgot/>
  },
  {
    path: "/goals",
    element: <Goals/>
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
