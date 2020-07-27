import React from 'react'
import './style.css'
import emoji from '../../assets/robot.svg'

export default function SpleshScreen() {

    return (
        <>
            <div className="splash">
                <div>
                    <img src={emoji} className={"image"} />
                    <h2 className={"title"}> Buscando token de autenticação </h2>
                </div>
            </div>

        </>
    )
}