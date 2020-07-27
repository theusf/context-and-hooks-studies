import React from "react";

import { useAuth } from '../services/auth'
import { useLoading } from '../services/loading'

import Login from '../Pages/Login'
import Dash from '../Pages/Dash'
import SplashCreen from '../Pages/Splesh'

export default function Router() {
  const { isLoged } = useAuth()
  const { isLoading } = useLoading()

  return (
    <>

      {isLoading ? <SplashCreen /> : "true"}
      
      {isLoged ? <Dash /> : <Login />}

    </>
  );
}
