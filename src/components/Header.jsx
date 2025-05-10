import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO, USER_PROFILE_URL } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { updateUserDetails } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(updateUserDetails({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(updateUserDetails({}))
        navigate('/');
      }
    });
    // runs when component unmount
    return () => unSubscribe()
  }, [])

  const SignOutHandler = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate('/error');
      console.log(error);
    });
  }


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen">
      <img
        className="w-40"
        src={NETFLIX_LOGO}
        alt='logo'
      />
      {Object.keys(user?.userData).length > 0 && <div className='flex '>
        <img
          className="w-12 h-12 p-2"
          src={USER_PROFILE_URL}
          alt='userIcon'
        />
        <button className='font-bold text-white' onClick={SignOutHandler}>Sign Out</button>
      </div>}

    </div>
  )
}

export default Header