import { WorkoutsContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const useWorkoutContext = () => {
    const mycontext = useContext(WorkoutsContext);

    if(!mycontext){ // means trying to access data outside scope.
        throw Error("useWorkoutContext() must be used inside a component that is enclosed inside an <WorkoutsContextProviderFunction>")
    }

    return mycontext;
}