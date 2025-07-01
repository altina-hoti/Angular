import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { CustomInputComponent } from '../shared/custom-input/custom-input.component';
import { BootstrapButtonComponent } from '../shared/bootstrap-button/bootstrap-button.component';
import { CustomDialogComponent } from '../shared/custom-dialog/custom-dialog.component';
import { TableComponent } from '../shared/table/table.component';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CustomInputComponent,
    BootstrapButtonComponent,
    TableComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  faSearch = faSearch;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CustomDialogComponent, {
      disableClose: true,
      width: '400px'
    });
  }

}
