import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => { //state==prev_state
    switch(action.type){
        case "SET_WORKOUTS":  // means jus set "all the wokrouts(an array of wokrouts)" with the givne data (==action.payload)
            return {workouts: action.payload} //returns the new state
        case "CREATE_WORKOUT":
            return {workouts: [action.payload, ...state.workouts]}
        default:
            return state
    }
}
export const WorkoutsContextProviderFunction = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer,{workouts:null}); //{workouts:null} is initial state value
    return (<WorkoutsContext.Provider value={{...state, dispatch}}>
        {children}
    </WorkoutsContext.Provider>);
}