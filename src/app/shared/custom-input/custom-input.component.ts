import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  @Input() placeholder: string = '';
  @Input() icon?: IconDefinition;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: string = '#000000'; 
}
