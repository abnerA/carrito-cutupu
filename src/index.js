import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RegisterSuccessful from './Components/Login/RegisterSuccessful';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <h2>Not found - 404</h2>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/calendary",
    element: <App />
  },
  {
    path: "/successful-registration",
    element: <RegisterSuccessful />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);