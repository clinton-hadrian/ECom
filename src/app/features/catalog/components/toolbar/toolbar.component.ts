import { Component, OnInit, output } from '@angular/core';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from '../../pages/catalog/catalog.component';
import { CatalogService } from '../../catalog.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helpers';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [PrimengModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  items!: any[];
  selectedCategory!: any;
  categories!: any[];
  productSearchValue!: any;

  onCategorySelect = output<string>();
  onProductSearch = output<string>();
  constructor(
    private catalogService: CatalogService,
    private notificationService: NotificationService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.isLoading.set(true);
    this.catalogService.getCategories().subscribe({
      next: (response) => {
        this.loaderService.isLoading.set(false);
        this.categories = response;
      },
      error: (err) => {
        this.loaderService.isLoading.set(false);
        this.notificationService.showError(
          'Oops!',
          messageHelper.getErrorMessage(err)
        );
      },
    });
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }

  emitCategory() {
    this.onCategorySelect.emit(this.selectedCategory);
  }

  emitSeachValue() {
    this.onProductSearch.emit(this.productSearchValue);
  }
}
