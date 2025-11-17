import '../css/sideBar.css';


function SideBar({ dashBoardData }) {
    return (

        <div className="side-bar">
            {dashBoardData.length > 0 &&
                dashBoardData.map((info) => (
                    <div className="dashboard-item" key={info.key}>
                        <div className="dashboard-icon">{info.icon}</div>
                        <div className="dashboard-name">{info.name}</div>
                    </div>
                ))
            }




        </div>

    )
}


export default SideBar;