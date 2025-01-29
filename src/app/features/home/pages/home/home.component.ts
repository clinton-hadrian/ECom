import { Component } from '@angular/core';
import { ToolbarComponent } from '../../../catalog/components/toolbar/toolbar.component';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'ecom-home',
  imports: [PrimengModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}
  onExplore() {
    this.router.navigate(['home/catalog']);
  }
}
