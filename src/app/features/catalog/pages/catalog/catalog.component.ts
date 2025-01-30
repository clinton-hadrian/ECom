import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CatalogService } from '../../catalog.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helpers';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ToolbarComponent, ProductListComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  products: any[] = [];
  selectedCategory: string = 'all';

  constructor(
    private catalogService: CatalogService,
    private notificationService: NotificationService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {}

  categorySelected(category: any): void {
    this.selectedCategory = category;
  }
}
