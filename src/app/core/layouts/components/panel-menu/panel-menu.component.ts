import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './panel-menu.component.html',
  styleUrl: './panel-menu.component.scss',
})
export class PanelMenuComponent implements OnInit {
  items!: any[];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            // command: () => {
            //   this.notificationService.add({
            //     severity: 'success',
            //     summary: 'Success',
            //     detail: 'File created',
            //     life: 3000,
            //   });
            // },
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            // command: () => {
            //   this.messageService.add({
            //     severity: 'warn',
            //     summary: 'Search Results',
            //     detail: 'No results found',
            //     life: 3000,
            //   });
            // },
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            // command: () => {
            //   this.messageService.add({
            //     severity: 'error',
            //     summary: 'Error',
            //     detail: 'No printer connected',
            //     life: 3000,
            //   });
            // },
          },
        ],
      },
      {
        label: 'Sync',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Import',
            icon: 'pi pi-cloud-download',
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
            label: 'Export',
            icon: 'pi pi-cloud-upload',
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
        //   command: () => {
        //     this.messageService.add({
        //       severity: 'info',
        //       summary: 'Signed out',
        //       detail: 'User logged out',
        //       life: 3000,
        //     });
        //   },
      },
    ];
  }
}
