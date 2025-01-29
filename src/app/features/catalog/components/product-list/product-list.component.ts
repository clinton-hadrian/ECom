import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helpers';
import { CatalogService } from '../../catalog.service';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [PrimengModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(
    private catalogService: CatalogService,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.catalogService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(res);
      },
      error: (err) => {
        this.notificationService.showError(
          'Oops!',
          messageHelper.getErrorMessage(err)
        );
      },
    });
  }

  getSeverity(count: any) {
    switch (count) {
      case count > 100:
        return 'success';

      case count <= 100 && count > 50:
        return 'warning';

      case count <= 50 && count > 0:
        return 'danger';

      default:
        return undefined;
    }
  }
}
