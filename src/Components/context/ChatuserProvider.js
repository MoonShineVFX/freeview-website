import React,{useState,useEffect} from 'react'
import { useSetState } from 'react-use';
export const ChatuserContext = React.createContext();

const initialState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null
}

export const ChatuserProvider = props =>{
  const [state, setState] = useSetState(initialState);
  const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
  const [currentUser , setCurrentUser] = useState("")
  const [currentTitleColor , setCurrentTitleColor] = useState("")
  const [pending, setPending] = useState(true);

  const login = (userdata) =>{
    console.log("userInfo",userdata)
    const {username,titlecolor} =userdata
    setLoginSuccess(true);
    setCurrentUser(username)
    setCurrentTitleColor(titlecolor)
  }
  const logout =()=>{
    setLoginSuccess(false);
    setCurrentUser({})
  }

  // useEffect(()=>{
  //     setCurrentUser(user)
  //     setPending(false)
  // },[])
  // if(pending){
  //   return <>Loading...</>
  // }

  return (
    <ChatuserContext.Provider
    value={{state,currentUser,currentTitleColor,login,logout}}
    >
      {props.children}

    </ChatuserContext.Provider>
  )
}