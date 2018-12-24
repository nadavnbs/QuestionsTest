import { Injectable } from '@angular/core';
import {Question} from './question';
// import {Qtype} from './Qtype';

const QUESTION = [
  {id:0,headline:'What is your full name',questionType:'explanation'},
  {id:1,headline:'What is your gender',questionType:'single'},
  {id:2,headline:'What is your birthday',questionType:'date'}
];

@Injectable()
export class QuestionsService {

  constructor() { }
  getQuestions(){
    return QUESTION;
  };
  getQuestion(id:number){
    return this.getQuestions().find((question)=>question.id == id)
  };
  addQuestion(question){
    // console.log('question')
    question.id = this.getQuestions().length + 1;
    QUESTION.push(question)
  };
}
