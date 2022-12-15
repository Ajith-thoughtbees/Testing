import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('inOutPaneAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
    trigger("changeDivSize", [
      state("initial",
        style({ backgroundColor: "grey", width: "100px", height: "100px" })
      ),
      state("final",
        style({ backgroundColor: "red", width: "200px",  height: "200px" })
      ),
      transition("initial=>final", animate("1500ms")),
      transition("final=>initial", animate("1000ms"))
    ]),
  ],
})

export class AnimationComponent implements OnInit {

  display = false;
  lines : string[] = [];
  currentState = "initial";
  constructor() { }

  ngOnInit(): void {
  }


  addLine() {
    this.lines.push('________________');
  }

  removeLine() {
    this.lines.pop();
  }

  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }
}
