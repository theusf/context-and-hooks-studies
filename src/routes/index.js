import React from "react";

import { useAuth } from '../auth'

import Login from '../Pages/Login'
import Dash from '../Pages/Dash'

export default function Router() {
  const { isLoged } = useAuth()

  console.log(isLoged)

  return (
    <>
      {isLoged ? <Dash /> : <Login />}
    </>
  );
}
