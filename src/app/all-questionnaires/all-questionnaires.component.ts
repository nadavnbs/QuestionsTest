import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-all-questionnaires',
  templateUrl: './all-questionnaires.component.html',
  styleUrls: ['./all-questionnaires.component.css']
})
export class AllQuestionnairesComponent implements OnInit {
  questions = new Array<any>()
  constructor(private questionsService:QuestionsService) { 
    this.questions = this.questionsService.getQuestions()
    console.log(this.questions)
  }

  ngOnInit() {
  }

}
