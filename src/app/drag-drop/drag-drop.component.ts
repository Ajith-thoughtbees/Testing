import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  colors = ['red', 'green', 'white'];
  droped = [];
  dragedColor = null;
  constructor() { }

  ngOnInit(): void {
  }

  dragStart(e:any, c:any) {
    this.dragedColor = c;
  }

  dragEnd(e:any) {
  }

  drop(e:any) {
    if (this.dragedColor) {
      this.droped.push(this.dragedColor);
      this.dragedColor = null;
    }
  }
}
