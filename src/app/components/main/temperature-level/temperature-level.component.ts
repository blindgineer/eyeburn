import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-temperature-level',
  templateUrl: './temperature-level.component.html',
  styleUrls: ['./temperature-level.component.scss'],
})
export class TemperatureLevelComponent implements OnInit {
  @Input() selected: number;
  @Input() fogones: any;
  isOfType: Function;

  constructor() {
    function isOfType(type: string, keyInput: number): keyInput is number {
      if (type == 'temperature') {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(keyInput);
      }
      return true;
    }
    this.isOfType = isOfType;
    this.selected = 0;
    this.fogones = [];
  }

  ngOnInit() {}

  addValue(key: string, value: number) {
    if (this.isOfType(key, this.fogones[this.selected][key] + value)) {
      this.fogones[this.selected][key] += value;
      if (key == 'temperature' && this.fogones[this.selected][key] > 0) {
          this.fogones[this.selected].status = 1;
      }
    }
  }

  subValue(key: string, value: number) {
    if (this.isOfType(key, this.fogones[this.selected][key] - value)) {
      this.fogones[this.selected][key] -= value;
      if (key == 'temperature' && this.fogones[this.selected][key] == 0) {
        this.fogones[this.selected].status = 0;
      }
    }
  }
}
