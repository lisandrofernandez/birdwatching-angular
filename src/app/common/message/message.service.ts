import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorsDialogComponent } from './errors-dialog/errors-dialog.component';

@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  showQuickMessage(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  showError(errors: string[]): void {
    this.dialog.open(ErrorsDialogComponent, { data: errors });
  }

}
