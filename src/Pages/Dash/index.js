import React from 'react';
import './style.css';

import { useAuth } from '../../services/auth2'

export default function Dash() {
    const { state, signOut } = useAuth()

    const logout = () => {
        signOut();
    }

    return (

        <div className="flex">
            <div>
                <h1> Welcome  🐱‍💻</h1>

                <button onClick={logout}>
                    Sair
            </button>
            <p>
                {JSON.stringify(state)}
            </p>
            </div>
        </div>
    );

}

