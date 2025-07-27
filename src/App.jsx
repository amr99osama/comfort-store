import React from 'react'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Products, SingleProducts, Login, Register, Orders } from './pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorElement } from './components';
import { ToastContainer } from 'react-toastify'

/// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProducts'
import { loader as productsLoader } from './pages/Products';

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
        loader: landingLoader, // this is the loader for the landing page
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader, // this is the loader for the products page
      },
      {
        path: 'products/:id',
        element: <SingleProducts />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader, // this is the loader for the landing page
      },
      {
        path: 'checkout',
        element: <Checkout />,
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
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App