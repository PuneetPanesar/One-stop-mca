import React, { useEffect, useState } from 'react'
import Slider from 'infinite-react-carousel';
import './Carousel.css'
import { Avatar } from '@material-ui/core';

function Carousel() {
  
  // const [seed, setSeed] = useState("");
  // useEffect(() => {
  //   setSeed(Math.ceil(Math.random()*600))
  // }, [])

  // console.log(seed);

    const settings =  {
        adaptiveHeight: true,
        autoplay: true,
        centerMode: true,
      };
    return (
        <div>
        {/* <span>CustomSlider</span> */}
        <Slider { ...settings } className="slider" >
          <div className="carousel__card">
            
            <h1> <Avatar src={`https://avatars.dicebear.com/api/human/sandeep.svg`} /> Sandeep Jaiswar</h1>
            <p>Preparation For entrance Exam from home means OneStopMca</p>
          </div>
          <div className="carousel__card" >
            <h1> <Avatar src={`https://avatars.dicebear.com/api/human/Rahul.svg`} />  Rahul Kumar</h1>
            <p>33:00 maza aa gya😍&nbsp;
              Thank you so much, bit manipulation ko itne ache se samjhane k</p>
          </div>
          <div className="carousel__card" >
            <h1> <Avatar src={`https://avatars.dicebear.com/api/human/sunny.svg`} />  Sunny Chaware</h1>
            <p>Thankyou Bhaiya for such a motivating and amazing session.tudents like us who can not afford the big coaching and other stuffs this platform is helping us in various ways.<br></br> Keep motivating us and Supporting us Bhaiya. Thanks alot.</p>
          </div>
          <div className="carousel__card" >
            <h1> <Avatar src={`https://avatars.dicebear.com/api/human/harsh.svg`} /> Harsh Tiwari</h1>
            <p>amazing session brother👌.Thanks A lot. Keep motivating us</p>
          </div>
        </Slider>
      </div>
    )
}

export default Carousel;