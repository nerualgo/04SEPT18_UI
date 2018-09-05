import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSubjectComponent } from './subject/create-subject/create-subject.component';
import { SearchSubjectsComponent } from './subject/search-subjects/search-subjects.component';
import { SubjectDetailsComponent } from './subject/subject-details/subject-details.component';
import { SubjectsListComponent } from './subject/subjects-list/subjects-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'subject', pathMatch: 'full' },
  { path: 'subject', component: SubjectsListComponent },
  { path: 'add', component: CreateSubjectComponent },
  { path: 'findbyssn', component: SearchSubjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
