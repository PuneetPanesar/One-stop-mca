import React from 'react';
import './FaqData.css';

const FaqData = props => {
    return (
        <div className="container-fluid d-flex justify-content-center cls-flex">
            <div className="row ques">
                <span className="quesQ">Q.</span>
                <span className="quesData">{props.ques}</span>
            </div>
            <div className="row ans">
                <span className="ansA">A.</span>
                <span className="ansData">{props.ans}</span>
            </div>
        </div>
    );
}

export default FaqData;