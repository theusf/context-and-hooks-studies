import React from 'react'
import './style.css'
import meusvg from '../../assets/meusvg.svg'

export default function SpleshScreen() {

    return (
        <>
            <div className="splash">
                <div >
                    <h1 className={"title"}> SplashScreen </h1>

                   
                        <img src={meusvg} className={"image"} />;

                </div>
            </div>

        </>
    )
}