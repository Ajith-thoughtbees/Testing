import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  text : string = 'About Page';

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(value: string) {
    if (value === 'foo') {
      return true;
    }
    return false;
  }
}
