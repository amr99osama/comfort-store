import React from 'react'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Products, SingleProducts, Login, Register, Orders } from './pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorElement } from './components';
/// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProducts'
import { loader as productsLoader } from './pages/Products';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';
/// actions
import { action as checkoutAction } from './components/CheckoutForm';
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'

// store
import { store } from './store'

/// react query for fetching data 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
// this is the router for the app

const router = createBrowserRouter([
  {
    // this is the home page
    path: '/',
    // this is the element that will be rendered on the home page
    element: <HomeLayout />,
    // this is the error element that will be rendered on the home page
    errorElement: <Error />,
    // this is the children of the home page
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient), // this is the loader for the landing page
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient), // this is the loader for the products page
      },
      {
        path: 'products/:id',
        element: <SingleProducts />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient), // this is the loader for the landing page
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store), // this is the loader for the checkout page
        action: checkoutAction(store, queryClient), // this is the action for the checkout page
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store, queryClient), // this is the loader for the orders page
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store), // this is the action for the register page

  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction, // this is the action for the register page
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App