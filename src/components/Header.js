import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSerchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch =()=>{
    //toggle GPT search
    dispatch(toggleGptSerchView())
  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

 
  useEffect(() => {
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
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
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    //unsubscribe when component unmount
    return ()=> unSubscribe()
  }, []);
  return (
    <div className="absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
        { 
        showGptSearch && (
          <select className="p-2 m-2 bg-gray-900 text-white" onChange={(e)=>handleLanguageChange(e)}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

          </select>
         )
         }
          <button onClick={()=>handleGptSearch()} className="px-4 py-2 mx-4 my-2 rounded-lg bg-purple-800 text-white">{showGptSearch?"Homepage":"GptSearch"}</button>
          <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button className="text-white" onClick={() => handleSignOut()}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
