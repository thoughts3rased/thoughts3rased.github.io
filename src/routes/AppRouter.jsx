import { Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from '../pages/home/Home'

console.log(Home)

const AppRouter = () => 
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
        </Routes>
    </Router>

export default AppRouter