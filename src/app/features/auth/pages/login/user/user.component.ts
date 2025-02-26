import { Component } from '@angular/core';
import { PrimengModule } from '../../../../../shared/modules/primeng/primeng.module';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../../shared/modules/shared/shared.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PrimengModule, SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
signIn() {
throw new Error('Method not implemented.');
}

}
