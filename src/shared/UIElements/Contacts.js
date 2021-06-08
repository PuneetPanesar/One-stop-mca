import React from 'react' ; 
import {ListGroup} from 'react-bootstrap';
import './Contacts.css';
import  fb from '../images/iconfinder_571114_facebook_fb_logo_social_icon_64px.png'
import tel from '../images/iconfinder_2460228_social_telegram_chat_messenger_icon_64px.png';
import you from '../images/iconfinder_5296521_play_video_vlog_youtube_youtube logo_icon_64px.png';
import insta from '../images/iconfinder_5296765_camera_instagram_instagram logo_icon_64px.png';

const Contacts = () =>{
    return <div className="contact">
    <div className="div1">
    <ul>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Test Series</li>
    <li>Give Aways</li>
    </ul>
    </div>
    <div className="div2">
        <ul>
            <li><b>Follow Us</b></li>
           <li> <img src={fb} style={{height:'2rem' , width: '2rem'}}/></li>
           <li> <img src={you}  style={{height:'2.5rem' , width: '2rem'}}/></li>
           <li> <img src={insta}  style={{height:'2rem' , width: '2rem'}}/></li>
           <li> <img src={tel}  style={{height:'3rem' , width: '2.5rem'}}/></li>
        </ul>
    </div>
    </div>
};
export default Contacts;