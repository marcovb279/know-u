import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  nouns : Array<String> = ['He','She','It'];
  children : Array<String> = [];
  genders : Array<String> = ['Male','Female','Other'];

  constructor() { }

  ngOnInit(): void {
  }

}
