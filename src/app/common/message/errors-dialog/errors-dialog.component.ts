import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  //selector: 'app-errors-dialog',
  templateUrl: './errors-dialog.component.html',
  styleUrls: ['./errors-dialog.component.scss']
})
export class ErrorsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public errors: string[]
  ) { }

}
