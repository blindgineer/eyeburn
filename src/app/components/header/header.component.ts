import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  reproducir() {
    speechSynthesis.speak(new SpeechSynthesisUtterance("Lo siento, no te he entendido"));
  }

  ngOnInit() {
  }

}
