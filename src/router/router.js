import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";
import Main from "../layout/Main";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: ()=> fetch('products.json'),
        element: <Shop />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader, //* jodi onno kono file e loader function likhe ekhane call korte chas tahole ()=> ... eivabe likhbi nah,, 
        //* just function ta call kore dibi nam dhore 
        element: <Orders />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
