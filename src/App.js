
import './global.css';
import { useScrollToTop } from './hooks/use-scroll-to-top';

import Router from './routes/sections';
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
<<<<<<< HEAD
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
=======
    <ThemeProvider>
      <Router />
    </ThemeProvider>
>>>>>>> 64d0a95 (updating mui files)
  );
}

// import React from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import ProtectedRoute from './components/ProtectedRoute';
// import SignInPage from './components/SignInPage';
// import HomePage from './components/HomePage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProtectedRoute><HomePage/></ProtectedRoute>,
//   },
//   {
//     path: "/signin",
//     element: <SignInPage />
//   }
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;