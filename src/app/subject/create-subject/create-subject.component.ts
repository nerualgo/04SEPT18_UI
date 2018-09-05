import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/service/subject';
import { SubjectService } from 'src/service/subject.service';

@Component({
  selector: 'create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  subject: Subject = new Subject();
  submitted = false;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }
  newSubject(): void {
    this.submitted = false;
    this.subject = new Subject();
  }
 
  save() {
    this.subjectService.createSubject(this.subject)
      .subscribe(data => console.log(data), error => console.log(error));
    this.subject = new Subject();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
