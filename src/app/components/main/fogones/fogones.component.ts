import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-fogones',
  templateUrl: './fogones.component.html',
  styleUrls: ['./fogones.component.scss'],
})
export class FogonesComponent implements OnInit {
  @Input() selected: number;
  @Output() onSelected = new EventEmitter<any>();
  @Input() fogones: Array<{
    id: number;
    name: string;
    status: number;
    temperature: number;
    timer: number;
  }>;

  constructor() {
    this.fogones = [];
    this.selected = 0;
  }

  onClick(fogon_id: number) {
    this.selected = fogon_id;
    this.onSelected.emit(this.selected);
  }

  ngOnInit() {}
}
