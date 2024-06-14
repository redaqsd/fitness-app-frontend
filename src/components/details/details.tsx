import { useContext } from "react"
import { WorkoutContext } from "../../context/context"
import { useParams } from "react-router-dom"

function Details (){
    interface workoutData {
        name : string,
        img : string,
        target : string,
        reps : number,
        sets : number,
        video : string
    }
    const {name} = useParams()
    const {data} : {data : workoutData[]} = useContext(WorkoutContext)

    const workout = data.find((elem : workoutData) => elem.name === name)

    return <div className="single-workout-exercise">
        <h1 className="single-workout-title"> {workout?.name} </h1>
        <img className="single-workout-img" src={workout?.img} />
        <div className="extra">
            <h3 className="single-workout-target"> Target : {workout?.target} </h3>
            <h3 className="single-workout-sets"> Sets : {workout?.sets} </h3>
            <h3 className="single-workout-reps"> Reps : {workout?.reps} </h3>
        </div>
        <iframe className='video'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${workout?.video}?autoplay=0`}>
        </iframe>
    </div>
}

export default Details