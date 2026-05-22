import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllGames from "../pages/Home/AllGames";
import GameDetails from "../pages/Home/GameDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path:"/allGames",
        element:<AllGames></AllGames>,
        loader:() =>fetch("data.json"),
      },
      {
        path:"/game/:id",
        element:<GameDetails></GameDetails>,
        loader:() => fetch("data.json")
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      
      {
        path:"/register",
        element:<Register></Register>
      },
    ],
  },
  
]);

export default router;