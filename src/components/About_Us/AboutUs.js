// import { Button } from '@material-ui/core'
import React from 'react'
import './AboutUs.css'
import Carousel from './Carousel'
import Footer from './Footer';
import CountUp from 'react-countup';
import kashish from '../../shared/images/kashish.jpg';
import puneet from '../../shared/images/puneet.jpg';
import yash from '../../shared/images/yash.jpg';
import namit from '../../shared/images/namit.jpg';
import Contacts from '../../shared/UIElements/Contacts';
function AboutUs() {

    // const buttonClickedConnect = () =>{
    //     alert("Button Clicked")
    // }

    return (
        <div className="aboutUs">
            
            {/* aboutUs__Header */}
            <div className="about__header">
                <p className="aboutHeader__headerText">About OneStop MCA</p>
                <p className="aboutHeader__subText">
                    Private Universities: The world is here where are are you?
                    Le Rankers: We are in good colleges!!
                    Hey everyone! We, students of NIT Calicut brings you our YouTube channel.
                    OneStop MCA will guide you to start your journey as an MCA student in your dream colleges. It provides one stop solution to all your queries starting from release dates, form filling to exam notification, choice filling and many more. For tips on accelerating your NIMCET preparation and to hit your daily productivity out of the park, SUBSCRIBE our channel.
                </p>
            </div>

            {/* Our Team */}
            <div className="ourTeam">
                <div style={{display:"grid",placeItems:"center", color:"black", padding:20}}>
                    <h1>OUR TEAM</h1>
                </div>
                <div className="team__member1">
                    {/* <div className="About__memberImg"> */}
                        <img src={namit} height="336px" width="280px" />
                    {/* </div> */}
                    <div className="About__memberText">Hey, I'm Namit Kapoor, founder of OneStop MCA. I faced many problems while preparing for my MCA entrances due to lack of proper resources and knowledge so I'm building up the biggest MCA community of India by guiding the students starting from their exam preparation to help them get a job in their dream company. In this way we build our better future and become more competitive.</div>
                </div>
                <div className="team__member2">
                    <div>
                        <img src={puneet} height="336px" width="280px"/>
                    </div>
                    <div className="About__memberText">Hey guys, I'm Puneet Kaur from Moradabad, Uttar Pradesh. I have completed my graduation from Delhi University. I believe in smartwork and hard work  and combination of both leads you to achieve your goal. All the very best to everyone.
                    </div>
                   
                </div>
                <div className="team__member1">
                <div>
                        <img src={kashish} height="336px" width="280px"/>
                    </div>
                    <div className="About__memberText" >Hey I'm Kashish Gupta. I'm a techy and also have keen interest in painting.. I believe consistency is the key to success. I have cleared almost every MCA entrance exam based on this concept. A small consistent effort can bring big change. So believe in yourself and give your best shot.
                    </div>
                </div>
                <div className="team__member2">
                    <div>
                        <img src={yash} height="336px" width="280px"/>
                    </div>
                        <div className="About__memberText">Hi I'm Yash. I'm a geek and love technology. I cleared the nimcet exam with self study in the last 5 months. I live life to the fullest: eat &gt;  code &gt; sleep &gt; repeat. If you love tech and want to innovate something then MCA is the right place for you.     </div>
                </div>
            </div>
            
            {/* Vission/Mission*/}
            <div className="vissionMission">
                <div className="vission">
                    <h1>Vision</h1>
                    <p>
                    Our Vision is to provide quality content by top rankers and provide the right knowledge and career guidance to young geeks looking forward to make their careers in computer science field.
                    </p>
                </div>
                <div className="mission">
                    <h1>Mission</h1>
                    <p>
                    Our mission is to build the best MCA commumity in India and create awareness among the students regarding various MCA entrances.
                    </p>
                </div>
            </div>


<hr />

            {/* We Section */}
            <div className="about__studentReview">
                <div className="testimonials__heading">
                    <p className="testimonials__text">Our Testimonials</p>
                </div>
                <Carousel />
            </div>

            {/* Talk to us */}
            <div className="about__talkToUs">
                <h1 color="#fff">Take the next step to grow the MCA community.<br/>
                    Learn + clear Doubts and grow.
                </h1>
                <div className="talkToUs__Button">
                <button ><a href="https://t.me/onestopmca">Connect</a></button>
                </div>
    </div>

            {/* Couter */}
            <div className="counter">
                <div className="counter__youTube">
                    <h1 style={{color:"#E50914"}}>YouTube Subscribers</h1>
                    <br/>
                    <div className="counter__counter">
                    <CountUp 
                        className="counter__countUp" 
                        suffix="+"
                        duration={10} 
                        end={4512}
                    />
                    </div>
                </div>
                <div className="counter__youTube">
                    <h1 style={{color:"#E50914"}}>YouTube Views</h1>
                    <br/>
                    <div className="counter__counter">
                    <CountUp 
                        className="counter__countUp" 
                        suffix="+"
                        duration={10} 
                        end={105272}
                    />
                    </div>
                </div>
                
            </div>

            {/* footer */}
            <div>
            <Contacts />
            </div>
        
        </div>
    )
}

export default AboutUs
