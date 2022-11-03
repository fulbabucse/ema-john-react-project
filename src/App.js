import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";
import { productsLoaders } from "./loaders/ProductsLoaders";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "shop",
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsLoaders,
          element: <Orders></Orders>,
        },
        { path: "inventory", element: <Inventory></Inventory> },
        { path: "about", element: <About></About> },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        { path: "login", element: <Login></Login> },
        { path: "register", element: <Register></Register> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
