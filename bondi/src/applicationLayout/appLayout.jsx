import '../css/appLayOut.css';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/appBar';


function AppLayOut() {
    return (
        <div className="application-container">

            <AppBar />

            <Outlet />

        </div>
    )
}


export default AppLayOut;