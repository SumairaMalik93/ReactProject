import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

const Header = () => {
    return (
        <div>
            <header className='logo_Img'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li className="header_btn">
                            +971 58 67 47 123
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header