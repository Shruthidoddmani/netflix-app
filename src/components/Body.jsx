import Login from './Login';
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { UserSliceActions } from '../utils/UserSlice';

const Body = () => {
    const dispatch = useDispatch();

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

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user.uid;
              dispatch(UserSliceActions.updateUserDetails({uid, email, displayName}))
            } else {
                dispatch(UserSliceActions.updateUserDetails())
            }
          });
    }, [])
    
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}


export default Body;