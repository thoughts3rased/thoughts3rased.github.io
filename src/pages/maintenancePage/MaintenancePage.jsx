import './MaintenancePage.scss'

// Config
import config from '../../../config.json'

const MaintnenancePage = () => {
    
    return (
        <div className="MaintenancePage">
            <div className="MaintenancePage_Content">
                <img src="/warning.png" />
                
                <h1 className="MaintenancePage_Content_Headline">oops...</h1>

                <span className="MaintenancePage_Content_SubText">Looks like we're under maintenance. We'll be back as soon as we can.</span>

                <span className="MaintenancePage_Content_Meantime">In the meantime, please enjoy this fun fact:</span>

                <span className="MaintenancePage_Content_FunFact">{config.funFacts[Math.floor(Math.random() * config.funFacts.length)]}</span>
            </div>
        </div>
    )
}

export default MaintnenancePage