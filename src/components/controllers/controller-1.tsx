import {Link} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"


function Controller ({workoutArray} : any){
    interface workoutData {
        day : string,
        name : string,
        img : string,
        target : string
    }


    return <div className="target-page">
        <div className="top-section">
            <h1 className="title"> {workoutArray[0]?.day} </h1>
            <Link className="back-link" to={"/"}> <FaArrowLeft /> </Link>
        </div>

        <div className="exercises">
            {workoutArray.map((workout : workoutData , i : number) => {
                const {name , img , target} = workout
                return <div className="single-ex" key={i}>
                    <img className="exercise-img" src={img} alt={name} />
                    <div className="info-section">
                        <h3 className="exercise-name"> Name : {name} </h3>
                        <h5 className="exercise-target"> Target : {target} </h5>
                        <Link to={`/workout-exercise/${name}`} className="know-more-link">
                            <button className="know-more-button">Know More...</button>
                        </Link>
                    </div>
                </div>
            })}
        </div>

    </div>
}

export default Controller