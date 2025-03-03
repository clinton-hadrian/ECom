import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { TermsConditionComponent } from '../../../../shared/components/terms-condition/terms-condition.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  noLeadingTrailingSpacesValidator,
  phoneNumberValidator,
  strictEmailValidator,
} from '../../../../shared/helpers/validator.helper';
import { CommonModule } from '@angular/common';
import { TimerComponent } from '../../components/timer/timer.component';
import { DirectiveModule } from '../../../../shared/modules/directive/directive.module';

@Component({
  selector: 'ecom-login',
  imports: [
    PrimengModule,
    SharedModule,
    TermsConditionComponent,
    CommonModule,
    TimerComponent,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginOtpForm!: FormGroup;

  cameoLink = 'https://cameo.liink';
  headerMessage = 'Terms And Conditions';
  loginStage = 1;
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          noLeadingTrailingSpacesValidator(),
          strictEmailValidator,
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          noLeadingTrailingSpacesValidator(),
          phoneNumberValidator(),
        ],
      ],
      role: ['CLIENT'],
    });

    this.loginOtpForm = this.fb.group({
      otp: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      type: ['LOGIN'],
    });
  }

  onSubmit() {
    switch (this.loginStage) {
      case 1:
        this.loginStage++;
        break;
      case 2:
        this.loginStage++;
        break;
      case 3:
        sessionStorage.setItem('token', 'asdasd');
        this.router.navigate(['home']);
        break;

      default:
        break;
    }
  }
  submitLoginForm() {}

  isValid(form: FormGroup, field: string) {
    return form.get(field)?.hasError('required') && form.get(field)?.touched;
  }

  hasTrailingSpace(form: FormGroup, field: string) {
    return (
      form.get(field)?.hasError('noOnlySpaces') && form.get(field)?.touched
    );
  }

  notOnlyText(form: FormGroup, field: string) {
    return form.get(field)?.hasError('notOnlyText') && form.get(field)?.touched;
  }

  invalidCompanyName(form: FormGroup, field: string) {
    return (
      form.get(field)?.hasError('invalidCompanyName') &&
      form.get(field)?.touched
    );
  }

  invalidMobileNumber(form: FormGroup, field: string) {
    return (
      form.get(field)?.hasError('invalidMobileNumber') &&
      form.get(field)?.touched
    );
  }

  textNorAlphaNum(form: FormGroup, field: string) {
    return (
      form.get(field)?.hasError('textNorAlphaNum') && form.get(field)?.touched
    );
  }

  strictEmail(form: FormGroup, field: string) {
    return (
      form.get(field)?.hasError('invalidEmail') && form.get(field)?.touched
    );
  }

  isEmail(form: FormGroup, field: string) {
    return form.get(field)?.hasError('email') && form.get(field)?.touched;
  }
}
