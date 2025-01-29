import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CatalogService } from '../../catalog.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helpers';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ToolbarComponent, ProductListComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  products: any[] = [];
  constructor(
    private catalogService: CatalogService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe({
      next: (res) => {
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
}
