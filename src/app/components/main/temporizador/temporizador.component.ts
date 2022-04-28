import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.scss'],
})
export class TemporizadorComponent implements OnInit {
  @Input() selected: number;
  @Input() fogones: any;

  isOfType: Function;

  constructor() {
    this.fogones = [];
    this.selected = 0;

    function isOfType(type: string, keyInput: number): keyInput is number {
      if (type == 'temperature') {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(keyInput);
      }
      return true;
    }
    this.isOfType = isOfType;
  }

  addValue(key: string, value: number) {
    if (this.isOfType(key, this.fogones[this.selected][key] + value)) {
      this.fogones[this.selected][key] += value;
    }
  }

  subValue(key: string, value: number) {
    if (this.isOfType(key, this.fogones[this.selected][key] - value)) {
      this.fogones[this.selected][key] -= value;
    }
  }

  startTimer() {
    let fogon = this.selected;
    this.fogones[fogon].interval = setInterval(() => {
      if (this.fogones[fogon].timer > 0) {
        this.fogones[fogon].status = 1;
        this.fogones[fogon].timer--;
      } else {
        let audio = new Audio('assets/sounds/alert.mp3');
        audio.play();
        audio.onended = function () {
          alert('El temporizador del fogon ' + fogon + ' terminó.');
        };
        this.fogones[fogon].status = 0;
        this.fogones[fogon].temperature = 0;
        clearInterval(this.fogones[fogon].interval);
      }
    }, 1000);
  }

  pauseTimer() {
    let fogon = this.selected;
    clearInterval(this.fogones[fogon].interval);
  }

  restartTimer() {
    let fogon = this.selected;
    clearInterval(this.fogones[fogon].interval);
    this.fogones[this.selected].timer = 0;
  }

  ngOnInit() {}
}
