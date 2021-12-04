import React from 'react';
import {Card} from 'react-bootstrap';
import { Button } from './globalStyles';
import './ArtistModal.css';


const ArtistModal = (props) =>{
   
 return <div className="container">

  <Card style={{ width: '20rem', height:'20rem',boxShadow: '5px 10px 20px 1px rgba(0, 0, 0, 0.253)'}}>
  <Card.Img style={{ width: '20rem', height:'12rem' }} variant="top" className="card-styling" src={props.img}  />
  <Card.Body>
    <Card.Title>
        <strong>{props.year}</strong></Card.Title>
    <Card.Text>
     </Card.Text>
    <Button variant="primary" className="btn-color" >
    <a href={props.pdf} download="pdf" style={{textDecoration:"none",color:"#fff"}}>
    <strong>DOWNLOAD</strong>
    </a>
    </Button>
  </Card.Body>
 </Card> 
 
 
 </div>
}
export default ArtistModal;