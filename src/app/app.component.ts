import { Component } from '@angular/core';
import {AllQuestionsComponent} from './all-questions/all-questions.component'
import {AllQuestionnairesComponent} from './all-questionnaires/all-questionnaires.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'QuestionTest';
  goToQuestions(){
    this.router.navigate([''])
  }
  goToQuestionnaires(){
    this.router.navigate(['allQuestionnaires'])
  }
}
