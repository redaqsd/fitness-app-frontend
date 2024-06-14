import { createContext, useEffect, useState } from "react"
export const WorkoutContext : any = createContext(null)

function WorkoutContextProvider({children} : any) {
    const [data , setData] = useState([])

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await fetch("https://fitness-app-backend-sigma.vercel.app")
                const result = await response.json()
                setData(result.exercises)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    const contextValue : any = {data}
    return <WorkoutContext.Provider value = {contextValue}>
        {children}
    </WorkoutContext.Provider>
}

export default WorkoutContextProvider
