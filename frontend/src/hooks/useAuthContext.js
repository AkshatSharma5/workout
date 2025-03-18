import { AuthContext } from "../context/AuthContext";
import { useContext } from "react"

export const useAuthContext = () => {
    const mycontext = useContext(AuthContext);
    // useContext(AuthContext) tries to access the current value of AuthContext.

    if(!mycontext){ // means trying to access data outside scope.
    // If mycontext is undefined, it means that the useContext() call failed.
        throw Error("useAuthContext() must be used inside a component that is enclosed inside an <AuthContextProviderFunction>")
    }

    return mycontext;
}