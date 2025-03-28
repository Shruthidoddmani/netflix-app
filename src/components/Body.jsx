
// import { useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../utils/Firebase';
// import { useDispatch } from 'react-redux';
// import { updateUserDetails } from '../utils/UserSlice';
// // import { useNavigate } from 'react-router-dom';

// const Body = () => {
//   const dispatch = useDispatch();
//   // const navigate = useNavigate();


//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName } = user.uid;
//         dispatch(updateUserDetails({ uid, email, displayName }));
//         console.log(uid, email, displayName);
//         // navigate('/browse');
//       } else {
//         dispatch(updateUserDetails({}))
//         // navigate('/');
//       }
//     });
//   }, [])

//   return (<></>)
// }


// export default Body;