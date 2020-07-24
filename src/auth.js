import React, { createContext, useState, useContext, useEffect} from 'react'

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [isLoged, setIsLoged] = useState(false);

    useEffect(() => {
        const storedLogin = localStorage.getItem('isLoged')

        if (storedLogin)
            toggleLogin(JSON.parse(storedLogin))

    }, []) 

    const toggleLogin = (value) => {
            setIsLoged(value)
            localStorage.setItem('isLoged', value.toString())
    }

    return (
    <AuthContext.Provider value={{isLoged, toggleLogin}}>
        { children }
    </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    const { isLoged, toggleLogin } = context;

    return { isLoged, toggleLogin };

}