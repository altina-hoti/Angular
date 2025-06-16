import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { faUser, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

import { CustomInputComponent } from '../custom-input/custom-input.component'; // shto rrugën tënde të saktë

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule, 
    MatIconModule,   
    CustomInputComponent 
  ],
})
export class CustomDialogComponent {
  faUser = faUser;
  faCalendarAlt = faCalendarAlt;
  faLock = faLock;

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }
}
