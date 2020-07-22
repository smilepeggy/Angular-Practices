import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: []
})
export class GameControlComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter<number>();
  interval
  number:number=0;
  constructor() { }

  ngOnInit() {
  }

  startGame(){

   this.interval= setInterval(()=>{
     this.eventEmitter.emit(this.number +1)
      this.number ++
      console.log(this.number);
    },1000)
  }

  stopGame(){
clearInterval(this.interval);
this.number=0;
  }
}
