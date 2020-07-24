import React from 'react';
import './style.css';

import { useAuth } from '../../auth'

export default function Dash() {
    const { isLoged, toggleLogin } = useAuth()

    const logout = () => {
        toggleLogin(false)
    }

    return (

        <div className="flex">
            <div>
                <h1> Welcome  🐱‍💻</h1>
                <h2> {isLoged.toString()} </h2>

                <button onClick={logout}>
                    Sair
            </button>
            </div>
        </div>
    );

}

