import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {YoutubePlayer} from 'reactjs-media';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoCard.css';




const VideoCard = (props) =>{
   
 return <div>
  <Card style={{ width: '18rem' , height :'14rem' ,background :'black'}}>
     
{/*<Card.Img variant="top"  src={props.img}  className="img"/>*/}
<div className="video">
<YoutubePlayer
        src={props.url} 
        width='287.8px'
        allowFullScreen
        // Reqiured    
            />
 </div>
   { /*<Card.Title style={{color:'white'}} >{props.Title}</Card.Title>*/}
   <Card.Body>
    <Button variant="primary" className="btn" >
     WATCH NOW
    </Button>
    </Card.Body>
 </Card> 
 
 </div>
}
export default VideoCard;