import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/service/subject';
import { SubjectService } from 'src/service/subject.service';


@Component({
  selector: 'search-subjects',
  templateUrl: './search-subjects.component.html',
  styleUrls: ['./search-subjects.component.css']
})
export class SearchSubjectsComponent implements OnInit {

  ssn: number;
  subjects: Subject[];

  constructor(private dataService: SubjectService) { }

  ngOnInit() {
    this.ssn = 0;
  }
  private searchSubjects() {
    this.dataService.getSubjectsBySsn(this.ssn)
      .subscribe(subjects => this.subjects = subjects);
  }
 
  onSubmit() {
    this.searchSubjects();
  }
}
