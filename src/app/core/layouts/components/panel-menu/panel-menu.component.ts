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
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Navigate',
        icon: 'pi pi-compass',
        items: [
          {
            label: 'Enquiry Received',
            icon: 'pi pi-search',
            command: () => {
              //this.router.navigate(['/enquiry-received']);
            },
          },
          {
            label: 'Send Link',
            icon: 'pi pi-link',
            command: () => {
              //this.router.navigate(['/send-link']);
            },
          },
          {
            label: 'List Of RIF\'s',
            icon: 'pi pi-list',
            command: () => {
              //this.router.navigate(['/list-of-rifs']);
            },
          },
          {
            label: 'Report',
            icon: 'pi pi-file',
            command: () => {
              //this.router.navigate(['/report']);
            },
          },
          {
            label: 'Payment Check',
            icon: 'pi pi-verified',
            command: () => {
              //this.router.navigate(['/payment-check']);
            },
          },
          {
            label: 'Bank Account',
            icon: 'pi pi-building-columns',
            command: () => {
              //this.router.navigate(['/bank-account']);
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
            command: () => {
              this.router.navigate(['/home/about']);
            },
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
