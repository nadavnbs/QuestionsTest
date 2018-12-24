import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { AllQuestionnairesComponent } from './all-questionnaires/all-questionnaires.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MatSelectModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import { AddQuestionComponent } from './add-question/add-question.component';
import {MatDialogModule} from '@angular/material/dialog';
import { QuestionsService } from './questions.service';
import {FilterPipe} from './filter.pipe'
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    AllQuestionsComponent,
    AllQuestionnairesComponent,
    HeaderComponent,
    AddQuestionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatTreeModule
  ],
  providers: [MatNativeDateModule,QuestionsService],
  bootstrap: [AppComponent],
  entryComponents:[AddQuestionComponent]
})
export class AppModule { }
