import '../css/sideBar.css';
import { Link } from 'react-router-dom';


function SideBar({ dashBoardData }) {
    return (

        <div className="side-bar">
            {dashBoardData.length > 0 &&
                dashBoardData.map((info) => (
                    <Link key={info.key} to={info.url}>
                        <div className="dashboard-item" key={info.key}>
                            <div className="dashboard-icon">{info.icon}</div>
                            <div className="dashboard-name">{info.name}</div>
                        </div>
                    </Link>
                ))
            }




        </div>

    )
}


export default SideBar;