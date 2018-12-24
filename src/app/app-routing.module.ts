import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllQuestionnairesComponent} from './all-questionnaires/all-questionnaires.component'
import {AllQuestionsComponent} from './all-questions/all-questions.component'

const routes: Routes = [
  {path:'',component:AllQuestionsComponent},
  {path:'allQuestionnaires',component:AllQuestionnairesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
