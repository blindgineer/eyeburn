import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HelpMenuComponent, HelpMenuDialogComponent } from './help-menu/help-menu.component';
import { MenuModule } from './settings-menu/settings-menu.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, MenuModule],
  declarations: [
    HeaderComponent,
    HelpMenuComponent,
    HelpMenuDialogComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
