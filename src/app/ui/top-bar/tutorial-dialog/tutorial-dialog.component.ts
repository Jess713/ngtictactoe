import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.scss']
})
export class TutorialDialogComponent{

  constructor(public dialogRef: MatDialogRef<TutorialDialogComponent>) { }

  onCancel() {
    if (this.dialogRef) {
        this.dialogRef.close();
    }
}

}
