import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss'],
})
export class ErrorpageComponent implements OnInit {
  display = false;
  lines : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  addLine() {
    this.lines.push('Add lines');
  }

  removeLine() {
    this.lines.pop();
  }
}
