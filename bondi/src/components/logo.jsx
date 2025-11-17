import Bondi from '../assets/bondi_image.webp';
import '../css/logo.css';


function Logo() {
    return (

        <div className="logo-container">
            <img src={Bondi} alt="logo for bondi" className='logo'/>
        </div>
    )
}

export default Logo;