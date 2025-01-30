import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NotificationService } from './core/services/notification.service';
import { PrimengModule } from './shared/modules/primeng/primeng.module';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule, PrimengModule],
  providers: [MessageService, NotificationService],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  constructor(
    private primeNgConfig: PrimeNGConfig,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }
}
