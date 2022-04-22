import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  selected: number = 0;
  fogones: any;

  constructor() {
    interface Fogon {
      id: number;
      name: string;
      status: number;
      temperature: number;
      timer: number;
    }

    interface Fogones extends Array<Fogon> {}

    let fogones: Fogones = [
      {
        id: 0,
        name: 'Fogon superior izquierda',
        status: 0,
        temperature: 0,
        timer: 60,
      },
      {
        id: 1,
        name: 'Fogon superior derecha',
        status: 0,
        temperature: 0,
        timer: 60,
      },
      {
        id: 2,
        name: 'Fogon inferior izquierda',
        status: 0,
        temperature: 0,
        timer: 60,
      },
      {
        id: 3,
        name: 'Fogon inferior derecha',
        status: 0,
        temperature: 0,
        timer: 60,
      },
    ];
    this.fogones = fogones;
  }

  onClick(selected: number) {
    this.selected = selected;
  }

  statusValue() {
    this.fogones[this.selected].status ^= 1;
    this.fogones[this.selected].temperature = 0;
  }

  ngOnInit() {}
}
