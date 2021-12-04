import React from 'react';


import ArtistModal from './ArtistModal';
import './ArtistList.css';

const ArtistList = (props) =>{
   
return(<div className="max-show">
    <ArtistModal className="artist-modal" year={props.obj[0].heading} img={props.obj[0].img} pdf={props.obj[0].pdf}/> 
    <ArtistModal className="artist-modal" year={props.obj[1].heading} img={props.obj[1].img} pdf={props.obj[1].pdf}/> 
    <ArtistModal className="artist-modal" year={props.obj[2].heading} img={props.obj[2].img} pdf={props.obj[2].pdf}/> 
    <ArtistModal className="artist-modal" year={props.obj[3].heading} img={props.obj[3].img} pdf={props.obj[3].pdf}/>
</div>)
    }
export default ArtistList;
