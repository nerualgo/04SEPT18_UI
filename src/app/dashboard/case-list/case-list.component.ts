import { Component, OnInit } from '@angular/core';

declare function navToggle(): any;
declare function openNav(): any;
declare function closeNav(): any;


@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // navToggle();
    openNav();
    //closeNav();
  }

}
