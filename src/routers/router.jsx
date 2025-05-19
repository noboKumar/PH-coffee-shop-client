import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Loading from "../components/Loading";
import CoffeeDetails from "../components/CoffeeDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://coffee-shop-server-plum-theta.vercel.app/coffees"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-plum-theta.vercel.app/coffees/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        Component: UpdateCoffee,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-plum-theta.vercel.app/coffees/${params.id}`
          ),
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
]);
