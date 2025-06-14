import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from './shared/custom-dialog/custom-dialog.component';
import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomInputComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSearch = faSearch;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CustomDialogComponent, {
      disableClose: true, // mos e mbyll dialogun kur klikon jashtë
      width: '400px'
    });
  }
}
