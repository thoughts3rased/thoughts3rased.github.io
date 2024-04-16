import { Router, Routes, Route } from 'react'

// Pages
import Home from '../pages/home/Home'

console.log(Home)

const AppRouter = () => 
    <Router>
        <Routes>
            <Route exact path="/"><Home /></Route>
        </Routes>
    </Router>

export default AppRouter