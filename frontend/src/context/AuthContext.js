import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action)=> {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProviderFunction = ({ children }) => {
    /*
    useReducer takes two arguments:
Reducer Function (authReducer): A function that determines how the state changes based on an action.
Initial State ({ user: null }): The starting state for your component. In this case, it indicates that no user is logged in initially.
    */
    const [state, dispatch] = useReducer(authReducer, { user:  null });  
    // 'state' and 'dispatch' are nothing but the names given... that is the state is named 'current state' [JUST LIKE useState(initVal)] 

    // They're simply names you choose when destructuring the array returned by the hook. You could name them mystate and mydispatch

    //The first value is your current state (here, starting as { user: null }), and the second is the dispatch function you use to send actions to update that state. It's like unwrapping a gift: you get the current state (the shiny present) and the key (dispatch) to change it however you want!

    /*
    LOGIN Action:
    When you call dispatch({ type: 'LOGIN', payload: someUserData }), the reducer sees the LOGIN type and returns a new state where user is set to someUserData.
    LOGOUT Action:
    When you call dispatch({ type: 'LOGOUT' }), the reducer returns a new state with user set to null.
    */

    console.log("AuthContext State is: ", state)

    // SO when this above function is used anywhere , then what the 'below' piece of code will do is that it will make the 'component jisne call kiya isse' (children) ko yeh context provide kar dega 

    // below piece of code

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {/* value={{ ...state, dispatch }}:
            Shares the current state (spread with {...state}) and the dispatch function with all components that consume this context. */}
            { children }
        </AuthContext.Provider>
    )
}