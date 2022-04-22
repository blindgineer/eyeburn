import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMenuComponent } from './settings-menu.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [SettingsMenuComponent],
  exports: [SettingsMenuComponent],
})
export class MenuModule {}
