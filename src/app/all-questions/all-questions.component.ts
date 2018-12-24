import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddQuestionComponent} from '../add-question/add-question.component'
import {Question} from '../question'
import { QuestionsService } from '../questions.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
  panelOpenState = false;
  filterTerm : string;
  question:Question
  questions = new Array<any>()

  constructor(public dialog: MatDialog,private questionsService:QuestionsService,private route:ActivatedRoute,private router:Router) { 
    this.questions = this.questionsService.getQuestions()
    console.log(this.questions)
  };

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.filterTerm = queryParams.headline;
    });
  }
  addQuestion(){
    const dialogRef = this.dialog.open(AddQuestionComponent)
  };
  onFilterChanged() {
    this.router.navigate([''], { queryParams: { headline: this.filterTerm }});
  }

}
