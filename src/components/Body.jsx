
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { UserSliceActions } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const dispatch = useDispatch();
    const navigate =  useNavigate();


    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user.uid;
              dispatch(UserSliceActions.updateUserDetails({uid, email, displayName}))
            //   navigate('/browser')
            } else {
                dispatch(UserSliceActions.updateUserDetails({}))
                // navigate('/')
                
            }
          });
    }, [])
    
    return (<></>)
}


export default Body;