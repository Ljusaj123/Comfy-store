import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./components";

import { landingLoader } from "./pages/Landing.jsx";
import { singleProductLoader } from "./pages/SingleProduct.jsx";
import { productsLoader } from "./pages/Products.jsx";
import { ordersLoader } from "./pages/Orders";

import { checkoutAction } from "./components/CheckoutForm";
import { registerAction } from "./pages/Register.jsx";
import { loginAction } from "./pages/Login.jsx";

import { store } from "./store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: Landing.loader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader.loader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProduct.loader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: Checkout.loader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: Orders.loader(store, queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: Login.action(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: Register.action,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
