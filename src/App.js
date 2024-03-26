import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import SignInPage from './components/SignInPage';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><HomePage/></ProtectedRoute>,
  },
  {
    path: "/signin",
    element: <SignInPage />
  }
]);

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello mom
        </a>
      </header>
    </div>
=======
    <RouterProvider router={router} />
>>>>>>> 2f09116 (added files for firestore authentication)
  );
}

export default App;