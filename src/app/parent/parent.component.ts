import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  count: number = 0;


  updateFromChild(event: any){
    this.count++;
  }

  reset(){
    this.count = 0;
  }
  constructor() { }

  ngOnInit(): void {

  }

}
