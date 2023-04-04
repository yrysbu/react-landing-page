import logo from '../images/Logo (1).png';
import Links from "./links";
import MainBtn from './MainBtn';
import MainFilledBtn from './MainFilledBtn';
const Header = () => {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <div className='logo-links'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Links />
                </div>

                <div className='btn'>
                    <MainBtn />
                    <MainFilledBtn />    
                </div>

                
            </div>
        </header>
    );
};

export default Header;