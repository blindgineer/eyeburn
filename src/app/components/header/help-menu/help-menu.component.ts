import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'header-help-menu',
  templateUrl: 'help-menu.component.html',
  styleUrls: ['help-menu.component.scss'],
})
export class HelpMenuComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(HelpMenuDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'help-menu-dialog',
  templateUrl: './help-menu-dialog.html',
})
export class HelpMenuDialogComponent {}
