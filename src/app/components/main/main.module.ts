import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FogonesComponent } from './fogones/fogones.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { TemperatureLevelComponent } from './temperature-level/temperature-level.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [
    MainComponent,
    FogonesComponent,
    TemporizadorComponent,
    TemperatureLevelComponent,
  ],
  exports: [MainComponent],
})
export class MainModule {}
