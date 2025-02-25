import { Component } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { TermsConditionComponent } from '../../../../shared/components/terms-condition/terms-condition.component';

@Component({
  selector: 'ecom-login',
  imports: [PrimengModule, SharedModule, TermsConditionComponent],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  headerMessage= "Terms And Condition "
  constructor(private router: Router) {}

  signIn() {
    sessionStorage.setItem('token', 'asdasd');
    this.router.navigate(['home']);
  }
}
