import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Template
import PageTemplate from '../templates/pageTemplate/PageTemplate'

// Pages
import Home from '../pages/home/Home'
import MaintnenancePage from '../pages/maintenancePage/MaintenancePage'

// Config
import config from '../../config.json'

const AppRouter = () => 
    <Router>
        {
            config.maintenanceMode &&
            <Routes>
                <Route path="*" element={<MaintnenancePage />} />
            </Routes>
        }
        
        {
            !config.maintenanceMode &&
            <Routes>
                <Route path="/" element={<PageTemplate component={<Home />} />} />
            </Routes>
        }
    </Router>

export default AppRouter