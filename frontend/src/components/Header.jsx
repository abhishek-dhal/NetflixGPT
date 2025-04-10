import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Component, useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // if(user.photoURL){
  //   console.log("Yes I am exist");
  // }
  // else{
  //   console.log("No I am not exist");
  // }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/"); Don't need it here
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
         navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //  unsubscribe when Component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-16 h-16" alt="userIcon" src={user.photoURL} />

          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>

       
      )}
    </div>
  );
};

export default Header;
