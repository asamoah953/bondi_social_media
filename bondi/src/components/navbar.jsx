import { useState } from 'react';
import '../css/navBar.css';
import { Link } from 'react-router-dom';



function NavBar(){
    const [button,setButton] = useState('home')
    return(
       <div className="nav-bar">
        <Link className='link' to={'/'}><div className={ button == 'home' ? 'selected': 'nav-item'} onClick={()=>setButton('home')}>Home</div></Link>
        <Link className='link' to={'/signup'}><div className={ button == 'signup' ? 'selected':'nav-item'} onClick={()=>setButton('signup')}>Sign Up</div></Link>
        <Link className='link' to={'/login'}><div className={ button == 'login' ? 'selected':'nav-item'} onClick={()=>setButton('login')}>Log In</div></Link>
       </div >
    )
}


export default NavBar;