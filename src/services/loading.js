import React, {
    createContext,
    useState,
    useContext
} from 'react'

const LoadingContext = createContext();

export default function AuthProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoading() {
    const context = useContext(LoadingContext)
    const { isLoading, setIsLoading } = context;

    return { isLoading, setIsLoading };

}