import React from 'react'
import logo from "../../images/logo.svg";
import { AiFillTwitterCircle, AiTwotoneMail } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
            <div className="row">
                <div className="colleft">
                    <img className="logo" src={logo} alt=""/>
                    <p className="footerAuthor">CSS Headliner</p>
                    <div className="footerText">
                        &nbsp; Passionately designed & developed by CSS 💻
                    </div>
                </div>
                <div className="colright">
                    <ul className="footerInfo">
                        <p className="footerInfoTitle">UST Computer Science Society</p>
                        <li className="footerInfos">About us </li>
                        <li className="footerInfos">Community</li>
                        <li className="footerInfos">News & Events</li>
                    </ul>
                </div>
                <div className="colright">
                    <ul className="footerSocials">
                        
                        <li className="Socials">
                            <AiTwotoneMail className="footerSocialIcons fa-regular fa-envelope"/>
                            Email
                        </li>
                        
                        <li className="Socials">
                            <BsFacebook className="footerSocialIcons fa-brands fa-facebook"/>
                            Facebook
                        </li>
                        <li className="Socials">
                            <AiFillTwitterCircle className="footerSocialIcons fa-brands fa-twitter"/>
                            Twitter
                        </li>
                        <li className="Socials">
                            <AiFillTwitterCircle className="footerSocialIcons fa-brands fa-instagram"/>
                            Instagram
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Footer