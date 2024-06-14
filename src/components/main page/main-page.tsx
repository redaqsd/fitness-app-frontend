import { useContext, useEffect, useState } from "react"
import { WorkoutContext } from "../../context/context"
import {Link} from "react-router-dom"


function MainPage (){
    const {data} : any = useContext(WorkoutContext)
    const [days , setDays] = useState<string[]>([])

    useEffect(() => {
        let arr : string[] = []
        for(let i = 0; i < data.length; i++){
            if(!arr.includes(data[i].day)){
                arr.push(data[i].day)
            }
        }
        setDays(arr)
    },[data])

    return <div className="main-workout-page">
        {days.map((day : string , i : number) => {
            return <Link className="workout-day" key={i} to={`/${day}`} >
                <h1> {day} </h1>
            </Link>
        })}
    </div>
}

export default MainPage