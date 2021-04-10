import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
})
export class AppNavbarComponent implements OnInit {
  constructor(private router: Router) { }

  home: String = "/home";
  tabs: Array<String> = ['QUESTIONS', 'ABOUT', 'CUSTOMIZE'];
  tabRoutes: Array<String> = ['/questions', '/about', '/customize'];

  ngOnInit(): void { }

  onClickButton(idx: number): void {
    this.router.navigateByUrl(this.tabRoutes[idx] as string);
  }

  onClickHome(): void {
    this.router.navigateByUrl(this.home as string);
  }
}
