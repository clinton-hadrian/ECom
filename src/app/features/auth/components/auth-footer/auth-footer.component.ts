import { Component } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';

@Component({
  selector: 'app-auth-footer',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './auth-footer.component.html',
  styleUrl: './auth-footer.component.scss'
})
export class AuthFooterComponent {
  cameoLink = 'https://cameo.liink';
}
