import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Card, Button} from 'react-bootstrap';

import VideoCard from './VideoCard';

const VideoSlider = () =>{

    const videos = [
        {
            Title : 'Computer Section Class 7',
            url : 'https://youtu.be/FlstArqSQHU'
        },
        {
            Title : 'P&C NIMCET 2022/23 Class 2',
            url : 'https://youtu.be/TVRuvesZtMI'
        },
        {
            Title : 'AIR-1 IGDTU ISHU GOEL ',
            url : 'https://youtu.be/K9A1R1FLL8I'
        },
        {
            Title : 'VIT MCA | Interview ',
            url : 'https://youtu.be/ZBOtAoh2xQ0'
        },
        {
            Title : ' All about logical reasoning section',
            url : 'https://youtu.be/t5LKDEzFnr8'
        }
        

    ];

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

     


      return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
      {videos.map(video => (
       <VideoCard  Title = {video.Title}  url = {video.url}/> 
    ))}
      </Carousel> );
}
export default VideoSlider;

