import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { NotificationService } from '../../../services/notification.service';
import { AuthService } from '../../../../features/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './panel-menu.component.html',
  styleUrl: './panel-menu.component.scss',
})
export class PanelMenuComponent implements OnInit {
  items!: any[];

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Navigate',
        icon: 'pi pi-compass',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
              this.router.navigate(['/home']);
            },
          },
          {
            label: 'Products',
            icon: 'pi pi-list',
            command: () => {
              this.router.navigate(['/home/catalog']);
            },
          },
          {
            label: 'Cart',
            icon: 'pi pi-shopping-cart',
            command: () => {
              this.router.navigate(['/home/cart']);
            },
          },
        ],
      },
      {
        label: 'Options',
        icon: 'pi pi-ellipsis-h',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            // command: () => {
            //   this.messageService.add({
            //     severity: 'info',
            //     summary: 'Downloads',
            //     detail: 'Downloaded from cloud',
            //     life: 3000,
            //   });
            // },
          },
          {
            label: 'About',
            icon: 'pi pi-question',
            // command: () => {
            //   this.messageService.add({
            //     severity: 'info',
            //     summary: 'Shared',
            //     detail: 'Exported to cloud',
            //     life: 3000,
            //   });
            // },
          },
        ],
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.authService.logout();
        },
      },
    ];
  }
}
