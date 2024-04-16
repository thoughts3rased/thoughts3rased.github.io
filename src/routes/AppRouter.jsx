import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Template
import PageTemplate from '../templates/pageTemplate/PageTemplate'

// Pages
import Home from '../pages/home/Home'

const AppRouter = () => 
    <Router>
        <Routes>
            <Route path="/" element={<PageTemplate component={<Home />} />} />
        </Routes>
    </Router>

export default AppRouter