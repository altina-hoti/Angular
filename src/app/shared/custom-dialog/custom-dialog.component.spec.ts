import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { faUser, faCalendar, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css'],
  imports: [CustomInputComponent]
})
export class CustomDialogComponent {
  faUser = faUser;
  faCalendar = faCalendar;
  faLock = faLock;

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
