import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import ScoreLogo from '../../shared/images/score.svg';
import './Result.css';
import  {Button}  from '../QuizCom/globalStyles';
function Result(props) {
  const history=useHistory();

  const backToHome =()=>{
    history.replace('/');
  }
  return (
    <div className="result">
      <div className="score-display">
      <h1>Your Score is <strong>{props.quizResult} / {props.total}</strong></h1>
       {props.quizResult === props.total ? (<h2><strong>Perfect!!</strong></h2>) : (<h2><strong>Practice more Quizes!</strong></h2>)}
       <Button big fontBig primary onClick={backToHome}>BACK TO HOME</Button>
       </div>
    <div className="score-img">
    <img src={ScoreLogo} alt="React Logo" height="400px"/>
    </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
};

export default Result;