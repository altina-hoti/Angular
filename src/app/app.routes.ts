import { Routes } from '@angular/router';
import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { BootstrapButtonComponent } from './shared/bootstrap-button/bootstrap-button.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CustomInputComponent
      },
      {
        path: 'button',
        component: BootstrapButtonComponent
      }
    ]
  }
];
