import { Button } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__header">
                <img alt="logo" />
                    <p className="header__text">&copy; 2021 OneStopMCA. All Rights Reserved</p>
                    <div className="header__join">
                        <p>Stay Up to Date. Join Community.</p>
                        <Button variant="outlined">JOIN</Button>                    </div>
            </div>
            <div className="footer__body">
                <div className="body__container">
                    <h3>Dummy 1</h3>
                    <ul>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                    </ul>
                </div>
                <div className="body__container">
                    <h3>Dummy 2</h3>
                    <ul>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                    </ul>
                </div>
                <div className="body__container">
                    <h3>Dummy 3</h3>
                    <ul>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                    </ul>
                </div>
                <div className="body__container">
                    <h3>Dummy 4</h3>
                    <ul>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                        <a href="/"><li>Link</li></a>
                    </ul>
                </div>
            </div>
            <div className="footer__extras">
                <div className="footer__icons">
                    <a href="/" target="_blank"><FacebookIcon /></a>
                    <a href="/" target="_blank"><TwitterIcon /></a>
                    <a href="/" target="_blank"><YouTubeIcon /></a>
                    <a href="/" target="_blank"><InstagramIcon /></a>
                    <a href="/" target="_blank"><TelegramIcon /></a>
                </div>
                <div className="footerExtra__text">
                    <h3><a href="/">Privacy Policy</a></h3>
                    <br></br>
                    <h3><a href="/">Terms And conditions </a></h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
