import WorkoutContextProvider from "./context/context"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import MainPage from "./components/main page/main-page"
import Pull from "./components/pull  day/pull"
import Push from "./components/push day/push"
import Details from "./components/details/details"
import "./app.css"

function App() {
    return <WorkoutContextProvider>
        <Router>
            <Routes>
                <Route path="/" element = {<MainPage />} />
                <Route path="/pull day" element = {<Pull />} />
                <Route path="/push day" element = {<Push />} />
                <Route path={`/workout-exercise/:name`} element = {<Details />} />
            </Routes>
        </Router>
    </WorkoutContextProvider>
}

export default App
