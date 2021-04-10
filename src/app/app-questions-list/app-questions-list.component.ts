import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './app-questions-list.component.html',
  styleUrls: ['./app-questions-list.component.css']
})
export class AppQuestionsListComponent implements OnInit {

  categories: Array<String> = ['All'];
  questionsList: Array<String>;

  lookupText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
