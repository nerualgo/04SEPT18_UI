import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'src/service/subject';
import { SubjectService } from 'src/service/subject.service';
import { SubjectsListComponent } from '../subjects-list/subjects-list.component';

@Component({
  selector: 'subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  @Input() subject: Subject;

  constructor(private subjectService: SubjectService, private listComponent: SubjectsListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.subjectService.updateSubject(this.subject.id,
      { name: this.subject.name, ssn: this.subject.ssn, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.subject = data as Subject;
        },
        error => console.log(error));
  }
 
  deleteSubject() {
    this.subjectService.deleteSubject(this.subject.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}