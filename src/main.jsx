
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'  // Changed import
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Toaster position='top-center' />   {/* Changed component */}
        <App />
    </Provider>
)