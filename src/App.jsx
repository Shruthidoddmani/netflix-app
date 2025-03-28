import {  } from 'react';
import Login from './components/Login';
import Browse from './components/Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';



function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  }
]);

export default App
