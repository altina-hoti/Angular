import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bootstrap-button',
  standalone: true, 
  templateUrl: './bootstrap-button.component.html',
  styleUrls: ['./bootstrap-button.component.css']
})
export class BootstrapButtonComponent {
  @Input() text: string = 'Button';
  @Input() color: string = 'primary';
  @Input() size: string = '';

@Output() clicked = new EventEmitter<void>(); 

  onClick() {
    this.clicked.emit(); 
  }
}