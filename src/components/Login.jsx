import { useState, useRef } from 'react';
import Header from "./Header";
import { checkValidData } from '../utils/validate';
import { LOGIN_IMG_URL } from '../utils/constants';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../utils/userSlice';
import { USER_PROFILE_URL } from '../utils/constants'


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();

  const onButtonClickHandler = () => {
    const message = checkValidData(email.current?.value, password?.current?.value)
    setErrorMsg(message);
    if (message) return
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current?.value, photoURL: USER_PROFILE_URL
          }).then(() => { 
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(updateUserDetails({ uid, email, displayName, photoURL }));
          }).catch(err => {
            console.error('error', err)
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '-' + errorMessage);
        });

    } else {
      signInWithEmailAndPassword(auth, email.current?.value, password?.current?.value)
        .then((userCredential) => {
          // const user = userCredential.user;
          // dispatch(updateUserDetails(user))
          // navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '-' + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <img
        className="absolute object-fill"
        src={LOGIN_IMG_URL}
        alt='background-img'
      />

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-44 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4 px-1">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && <input
          ref={fullName}
          type='text'
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />}

        <input
          ref={email}
          type='text'
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />

        <input
          ref={password}
          type='password'
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />

        <p className='text-red-500 font-bold'>{errorMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={onButtonClickHandler}
        >
          {isSignIn ? "Sign In" : "Sign Up"}

        </button>

        <p
          className="text-slate-300">
          {isSignIn ? 'New to Netflix? ' : 'Already registered '}
          <span
            className="hover:underline cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          > {isSignIn ? 'Sign Up Now' : 'Sign In Now'} </span>
        </p>

      </form>

    </div>
  )
}

export default Login