import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError();
    return (
        <div className="error-element">
            <h1>Oops! Something went wrong.</h1>
            <p>{error.message}</p>
            <p>Please try again later or contact support if the issue persists.</p>
        </div>
    )
}

export default ErrorElement