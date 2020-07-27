import React,
{
    createContext,
    useContext,
    useEffect,
    useReducer
} from 'react'

const meutoken = 'meutoken'

const AuthContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'ENTRAR':
            return {
                isLogged: true,
                token: action.token
            }
        case 'SAIR':
            return {
                isLogged: false,
                token: null
            }
        case 'TOKEN':
            return {
                isLoading: false,
                token: action.token
            }
        default:
            return {
                isLoading: true,
                isLogged: false,
                token: null
            }
    }

}


export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, { isLoading: true, isLogged: false, token: null })

    const signIn = () => {

        localStorage.setItem('token', meutoken)

        dispatch({ type: 'ENTRAR', token: meutoken })
    }

    const signOut = () => {
        localStorage.removeItem('token')
        dispatch({ type: 'SAIR' })
    }

    useEffect(() => {

        setTimeout(function () {

            const storedToken = localStorage.getItem('token')
            dispatch({ type: 'TOKEN', token: storedToken })

        }, 2000);

    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, state }}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const { signIn, signOut, state } = useContext(AuthContext);

    return { signIn, signOut, state };

}