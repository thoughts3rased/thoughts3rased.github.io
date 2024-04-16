import './Navbar.scss'

// Config
import config from '../../../config.json'

const Navbar = () => {
    return (
        <div className="Navbar">
            <span className="Navbar_SiteTitle">Samuel Tong</span>

            {
                config.navbar.map(navbarItem => {
                    
                })
            }
        </div>
    )
}

export default Navbar