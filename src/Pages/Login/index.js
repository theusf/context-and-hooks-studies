import React from 'react';
import './style.css';

import { useAuth } from '../../auth'

function App() {

  const { isLoged, toggleLogin } = useAuth();

  function login(user, password) {
    toggleLogin(true)
  }

  return (

    <div className="flex">

      <div>
        <p style={{ backgroundColor: 'white' }}>
          {isLoged}
        </p>

        <h1> Login  🐱‍💻 {isLoged.toString()}</h1>

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
