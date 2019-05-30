import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle: string = 'My Awesome App'; //typescript
  //can also be : appTitle = 'My Awesome App'; - js
  constructor() { }

  ngOnInit() {
  }

}
