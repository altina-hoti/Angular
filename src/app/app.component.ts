

import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CustomDialogComponent } from './shared/custom-dialog/custom-dialog.component';
import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { BootstrapButtonComponent } from './shared/bootstrap-button/bootstrap-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    CustomInputComponent,
    
    BootstrapButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSearch = faSearch;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      width: '400px'
    });
  }
}
