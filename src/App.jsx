import Login from './components/Login';
import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import store from './utils/AppStore';
import { Provider } from 'react-redux';

function App() {
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

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} >
          {/* <Body /> */}

        </RouterProvider>
      </Provider>
    </>
  )
}

export default App
