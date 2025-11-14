import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import '../css/authLayOut.css'

function AuthLayOut() {
    return (
        <div className="auth-container">
            <NavBar />

            <Outlet />

        </div>
    )
}


export default AuthLayOut;