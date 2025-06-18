import { Routes } from '@angular/router';
import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { BootstrapButtonComponent } from './shared/bootstrap-button/bootstrap-button.component';

export const routes: Routes = [
  {
    path: '',
    component: CustomInputComponent
  },
  {
    path: 'button',
    component: BootstrapButtonComponent
  },
  
];
