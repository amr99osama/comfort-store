import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-content-center bg-gray-900 text-white">
        <div className="text-center">
          <p className="text-primary font-semibold text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-sm md:text-base leading-6">
            The page you are looking for does not exist. It might have been
            moved or deleted.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-2 bg-secondary text-white rounded-md"
          >
            Go back to home
          </Link>
        </div>
      </main>
    );
  } else {
    return (
      <main className="grid min-h-[100vh] place-content-center bg-gray-900 text-white">
        <div className="text-center">
          <p className="text-primary font-semibold text-8xl">
            There's an error
          </p>
          <p className="mt-4 text-sm md:text-base leading-6">
            {error.statusText || error.message}
          </p>
        </div>
      </main>
    );
  }
};

export default Error;
