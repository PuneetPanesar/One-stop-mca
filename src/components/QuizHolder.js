import React, { Component } from 'react';
import axios from 'axios';
import LoadingSpinner from '../shared/UIElements/LoadingSpinner';
import Result from './Quiz/Result';
import Quiz from './Quiz/Quiz';

import './QuizHolder.css';

class QuizHolder extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ques:[],
      count:0,
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '', 
      isLoading: true
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this); 
  }
  componentDidMount() { 
  axios.get('http://localhost:3000/questions')
          .then(res => {
            const ques = res.data;
            this.setState({ques : ques});
          }).then(this.setState ({ isLoading : false}))
          .then( fun =>{ 
       const shuffledAnswerOptions = this.state.ques.map((question) => this.shuffleArray(question.answers));  
       this.setState({
       question : this.state.ques[0].question,
       answerOptions: shuffledAnswerOptions[0]
    });
          })
  }

  shuffleArray(array) {
    return array;
  };
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if(event.currentTarget.value==="1"){
              this.state.count=this.state.count+1;
          }
    
    if (this.state.questionId < this.state.ques.length) {
        setTimeout(() => this.setNextQuestion(), 300);
        
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
      
  }

  setUserAnswer(answer) {
    if(!this.state.isLoading && this.state.ques.length){
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }
  }
  setNextQuestion() {
    if(!this.state.isLoading && this.state.ques.length){
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.ques[counter].question,
      answerOptions: this.state.ques[counter].answers,
      answer: ''
    });
  }
  }
  getResults() {
    if(!this.state.isLoading && this.state.ques.length){
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
  
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }
  }
  setResults (result) {
    if(!this.state.isLoading && this.state.ques.length){
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
  }

  renderQuiz() {
    
    return (
      <React.Fragment>
      {!this.state.ques.length && (<div className="center">
        <LoadingSpinner asOverlay/>
       </div>)}
      {!this.state.isLoading && this.state.ques.length && (<Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.ques.length}
        onAnswerSelected={this.handleAnswerSelected}
      />) }
      </React.Fragment>
    );
  }

  renderResult() {
    return <Result quizResult={this.state.count} total={this.state.ques.length}/> 
  }
  render() {
    return (
      <div className="colorclass">
         <header className="App-header">
          <h1 className="">Mathematics QUIZ</h1>
        </header>     
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default QuizHolder;