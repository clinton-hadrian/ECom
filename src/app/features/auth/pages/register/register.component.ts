import { Component } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { Router } from '@angular/router';
import { AuthFooterComponent } from '../../components/auth-footer/auth-footer.component';

@Component({
  selector: 'ecom-register',
  imports: [PrimengModule, AuthFooterComponent],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  register() {
    sessionStorage.setItem('token', 'asdasd');
    this.router.navigate(['home']);
  }
}
