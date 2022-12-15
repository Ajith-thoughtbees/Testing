import { Component,  OnInit,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input("parentCount")
  count!: number;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  updateCount() {
    this.count++;
    this.change.emit(this.count);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
