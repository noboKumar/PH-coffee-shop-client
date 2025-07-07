import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Loading from "../components/Loading";
import CoffeeDetails from "../components/CoffeeDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import DashBoard from "../layouts/DashBoard";
import DashHome from "../components/DashHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        Component: CoffeeDetails,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashBoard,
    children: [
      {
        index: true,
        Component: DashHome,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        Component: UpdateCoffee,
      },
    ],
  },
]);
