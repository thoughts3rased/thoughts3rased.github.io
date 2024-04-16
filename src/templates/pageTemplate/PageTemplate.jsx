import './PageTemplate.scss'

// Organisms
import Navbar from '../../organisms/navbar/Navbar'

const PageTemplate = ({ component }) => {

    return (
        <div className="PageTemplate">

            <Navbar className="PageTemplate_Navbar" />

            <div className="PageTemplate_Content">
                {component}
            </div>
        </div>
    )
}

export default PageTemplate