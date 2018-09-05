import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/service/subject.service';
import { Observable } from 'rxjs';
import { Subject } from 'src/service/subject';


@Component({
  selector: 'subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  subjects: Observable<Subject[]>;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteSubjects() {
    this.subjectService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.subjects = this.subjectService.getSubjectsList();
  }
}
