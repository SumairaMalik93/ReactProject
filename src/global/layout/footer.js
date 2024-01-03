import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="coloumn_one">
                    <ul>
                        <li>
                            <img src={Logo} alt="" />
                        </li>
                        <li>
                            <p className='into_Para'>
                                We make sure that your safety is never compromised.
                                This is why we hire all the staff under the roof of Home
                                Comfort, just for your satisfaction.
                            </p>
                        </li>

                    </ul>
                </div>
                <div className="coloumn_two">
                    <ul>
                        <li>
                            <nav>
                                <ul>
                                    <li id='Item_Home'>
                                        Home
                                    </li>
                                    <li>
                                        Services
                                    </li>
                                    <li>
                                        Contact Us
                                    </li>

                                </ul>
                            </nav>
                        </li>
                        <li>
                            <nav>
                                <ul>
                                    <li>
                                        Facebook
                                    </li>
                                    <li>
                                        Twitter
                                    </li>
                                    <li>
                                        Linkedin
                                    </li>
                                    <li>
                                        Instagram
                                    </li>
                                </ul>
                            </nav>
                        </li>

                    </ul>
                </div>

                <div className="coloumn_three">
                    <ul>
                        <li>
                            +971 58 67 47 123
                        </li>
                        <li>
                            info@homecomfort.com
                        </li>
                    </ul>
                    <div className="news_letter">
                        <input type="text" placeholder="Enter Email" />
                        <button>send</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer