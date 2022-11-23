import {click} from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  
  window.addEventListener('resize', showButton);

  useEffect(() =>{
    showButton()
  },[]);

  return (
    <>
      <div>
        <nav className='navbar'>

            <div className='navbar-container'>

              <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
                Travelago<i className='fab fa-typo3'/> 
              </Link>

              <div className= "menu-icon" onClick={handleClick}>
                <i className={click? 'fas fa-times':'fas fa-bars'}/>
              </div>
              <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/sign-up' className='nav-links-mobile'>SIGN UP</Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
            
        </nav>
      </div>
    </>
  )
}

export default Navbar;
/**/