import React from 'react';
import './Computer.css'
import ArtistList from '../Resources/ArtistList';

import comp1 from '../Posters/comp1.png';
import cpdf1 from '../Posters/comp1.pdf';

import comp2 from '../Posters/comp2.png';
import cpdf2 from '../Posters/comp2.pdf';

import comp3 from '../Posters/comp3.png';
import cpdf3 from '../Posters/comp3.pdf';

import comp4 from '../Posters/comp4.jpg';
import cpdf4 from '../Posters/comp3.pdf';

import lr1 from '../Posters/lr1.jpg';
import lr2 from '../Posters/lr2.jpg';
import lr3 from '../Posters/lr3.jpg';
import lr4 from '../Posters/lr4.jpg';

import m1 from '../Posters/m1.jpg';
import m2 from '../Posters/m2.jpg';
import m3 from '../Posters/m3.jpg';
import m4 from '../Posters/m4.jpg';

function Computer(){
    const math=[{
        img:m1,
        pdf:cpdf1,
        heading:"P&C"
    },{
        img:m2,
        pdf:cpdf2,
        heading:"Vectors: Dot & Cross"
    },{
        img:m3,
        pdf:cpdf3,
        heading:"Differential Calculus"
    },{
        img:m4,
        pdf:cpdf4,
        heading:"Probability"
    }];
    const comp=[{
        img:comp1,
        pdf:cpdf1,
        heading:"Number Representation"
    },{
        img:comp2,
        pdf:cpdf2,
        heading:"Boolean Algebra"
    },{
        img:comp3,
        pdf:cpdf3,
        heading:"Binary Arithemetic"
    },{
        img:comp4,
        pdf:cpdf4,
        heading:"Logic Gates"
    }];
    const lr=[{
        img:lr2,
        pdf:cpdf1,
        heading:"Syllogism"
    },{
        img:lr1,
        pdf:cpdf2,
        heading:"Number Theory"
    },{
        img:lr3,
        pdf:cpdf3,
        heading:"Puzzels"
    },{
        img:lr4,
        pdf:cpdf4,
        heading:"Blood Relations"
    }];
   

    return(
        <div style={{textAlign:'center'}}>
   
    <div className="about__header">
        <h1 className="aboutHeader__headerText">OneStop MCA's Resources</h1>
        <p className="aboutHeader__subText">
        OneStop MCA is conducting classes and providing quality notes prepared by the NIMCET top Rankers. These classes will help you analyse your mistakes by helping you reduce negative marks. Special rank boosting series is also launched along with this for excelling    your performance. The quality notes and practice questions help you check your preparation and make you ready for the Computer Based Test of NIMCET. Hope our efforts will help you build a better future. Thanks Team OneStop.
        </p>
        </div>
        <div className="about__studentReview">
                <div className="testimonials__heading">
                    <p className="testimonials__text">MATHEMATICS</p>
                </div>
            </div>
    
    <ArtistList obj={math}/>
    <div className="about__studentReview">
                <div className="testimonials__heading">
                    <p className="testimonials__text">COMPUTER</p>
                </div>
            </div>
    
    <ArtistList obj={comp}/>
    <div className="about__studentReview">
                <div className="testimonials__heading">
                    <p className="testimonials__text">LOGICAL REASONING</p>
                </div>
            </div>
    
    <ArtistList obj={lr}/>
    
    </div>
    )
}

export default Computer;