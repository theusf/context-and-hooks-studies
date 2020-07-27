import React from 'react';
import './style.css';

import { useAuth } from '../../services/auth2'
import { useLoading } from '../../services/loading'

function App() {
  const { state, signIn  } = useAuth();

  function login(user, password) {
    signIn()
  }

  return (

    <div className="flex">

      <div>
        <p style={{ backgroundColor: 'white' }}>
          {state.isLogged}
        </p>

        <h1> Login  🐱‍💻 {state.isLogged}</h1>

        <input type="text" placeholder="user">
        </input>

        <input type="text" placeholder="password">
        </input>

        <button onClick={login}>
          Login
        </button>

      </div>

    </div>
  );

}

export default App;
