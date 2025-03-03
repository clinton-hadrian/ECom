import { Component } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [PrimengModule, SharedModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  signIn() {
    throw new Error('Method not implemented.');
  }
}
