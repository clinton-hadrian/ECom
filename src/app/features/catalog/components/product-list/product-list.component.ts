import { Component, effect, input, OnInit } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helpers';
import { CatalogService } from '../../catalog.service';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [PrimengModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  // layout: any = 'list' ;
  category = input.required();
  proSearchValue = input.required<string>();
  constructor(
    private catalogService: CatalogService,
    private notificationService: NotificationService,
    private router: Router,
    private loaderService: LoaderService
  ) {
    effect(() => {
      console.log('effect', this.category());
      console.log('search value', this.proSearchValue());
      this.filteredProducts = this.products.filter((product) => {
        const matchesCategory = this.category() === 'all' || this.category() === null || product.category === this.category();
        const matchesSearch = !this.proSearchValue() || product.title.toLowerCase().includes(this.proSearchValue().toLowerCase());

        return matchesCategory && matchesSearch;
      });
      console.log('filteredProducts', this.filteredProducts);
    });
  }
  ngOnInit(): void {
    this.loaderService.isLoading.set(true);
    this.catalogService.getProducts().subscribe({
      next: (res) => {
        this.loaderService.isLoading.set(false);
        this.products = res;
        this.filteredProducts = this.products;
        console.log(res);
      },
      error: (err) => {
        this.loaderService.isLoading.set(false);
        this.notificationService.showError(
          'Oops!',
          messageHelper.getErrorMessage(err)
        );
      },
    });
  }

  productDetails(productId: number) {
    this.router.navigate(['/home/product-details', productId]);
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
