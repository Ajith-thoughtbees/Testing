import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.scss']
})
export class CustomElementComponent implements OnInit {

  title = 'Angular Elements';
  @Input()
  name!: string;
  @Input()
  answer!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
