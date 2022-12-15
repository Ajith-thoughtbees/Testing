import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  text: string = 'Contact Page';
  isVisible = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
