import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomInputComponent],
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
  //title = 'Angular-project';
  faSearch = faSearch;
}
