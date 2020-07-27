import React from "react";

//import { useAuth } from '../services/auth'
//import { useLoading } from '../services/loading'
import { useAuth } from '../services/auth2'


import Login from '../Pages/Login'
import Dash from '../Pages/Dash'
import SplashCreen from '../Pages/Splash'



export default function Router() {
  const { state } = useAuth()

  return (
    <>
      {
      state.isLoading ? <SplashCreen /> : (
        state.token ? <Dash /> : <Login />
      )
      }

    </>
  );
}
