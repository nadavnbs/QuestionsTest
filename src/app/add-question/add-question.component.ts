import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuestionsService } from '../questions.service';
import {Question} from '../question'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  newQuestion:Question = new Question();
  

  constructor(public dialogRef: MatDialogRef<AddQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,private questionsService:QuestionsService) { }

  ngOnInit() {
  }
  addNewQuestion(){
    this.questionsService.addQuestion(this.newQuestion)
    this.dialogRef.close()
  }

}
