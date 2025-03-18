import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => { /// custom hook for separate and easy rendering
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext();
    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null); // at fresh start , no error
        const response = await fetch('/api/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json(); // recall that repsonse contains - ('email' , 'token') - res.status(200).json({email, token})
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // 1. store the user(ie.JWT) - save in localstorage (reloading issue resolved)
            // 2. update auth context
            // 3. update laoding states

            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            // update auth context
            dispatch({type:'LOGIN', payload: json});
            // stop loading
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}