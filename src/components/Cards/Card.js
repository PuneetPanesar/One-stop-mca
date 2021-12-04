import React from 'react';
import './Card-style.css'

const Card = props => {
    return (
        <div className="card text-center demo-card">
            <div className="overflow">
                <img src={props.imgsrc} alt="First Image" className='card-img-top demo-img' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.data}
                </p>
                <a href={props.link} target="_blank" className="btn btn-outline-success">Participate</a>

            </div>
        </div >
    );
}
export default Card;