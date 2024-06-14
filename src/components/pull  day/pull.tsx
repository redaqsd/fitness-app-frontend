import { useState , useEffect , useContext } from "react"
import Controller from "../controllers/controller-1"
import { WorkoutContext } from "../../context/context"

function Pull (){
    interface workoutData {
        day : string,
        name : string,
        img : string,
        target : string
    }
    const {data} : {data : workoutData[]} = useContext(WorkoutContext)
    const [workouts , setWorkout] = useState<workoutData[]>([])


    useEffect(() => {
        let arr = data.filter((elem : workoutData) => elem.day === "Pull Day")
        setWorkout(arr)
    },[data])

    

    return <Controller workoutArray = {workouts} />
}

export default Pull