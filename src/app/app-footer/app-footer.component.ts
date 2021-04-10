import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
})
export class AppFooterComponent implements OnInit {
  items: Array<String> = ['Dribble', 'LinkedIn', 'Contact', 'Donate'];
  itemsLinks: Array<String> = ['www.google.com', 'www.yahoo.com', 'www.bing.com', 'www.duckduckgo.com'];

  constructor() { }

  ngOnInit(): void { }

  solveLink(idx: number): void {
    this.goToLink(this.itemsLinks[idx] as string);
  }

  goToLink(url: string): void {
    if (!/^http[s]?:\/\//.test(url)) {
      url = 'http://' + url;
    }
    window.open(url, "_blank");
  }

}
