import { Component } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'ecom-login',
  imports: [PrimengModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  signIn() {
    sessionStorage.setItem('token', 'asdasd');
    this.router.navigate(['home']);
  }
}
