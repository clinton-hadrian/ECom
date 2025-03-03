import { CommonModule } from '@angular/common';
import { Component, effect, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../../../core/services/loader.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helper';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { CatalogService } from '../../../catalog/catalog.service';
import { CartService } from '../../cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [PrimengModule, CommonModule, FormsModule],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent implements OnInit {
  // products: any[] = [];
  // filteredProducts: any[] = [];
  // category = input.required();
  // proSearchValue = input.required<string>();
  cartItems: any[] = [];

  constructor(
    private catalogService: CatalogService,
    private notificationService: NotificationService,
    private router: Router,
    private loaderService: LoaderService,
    public cartService: CartService
  ) {
    // effect(() => {
    //   this.filteredProducts = this.products.filter((product) => {
    //     const matchesCategory =
    //       this.category() === 'all' ||
    //       this.category() === null ||
    //       product.category === this.category();
    //     const matchesSearch =
    //       !this.proSearchValue() ||
    //       product.title
    //         .toLowerCase()
    //         .includes(this.proSearchValue().toLowerCase());

    //     return matchesCategory && matchesSearch;
    //   });
    //   console.log('filteredProducts', this.filteredProducts);
    // });
    effect(() => {
      this.cartItems = this.cartService.cartItems();
      console.log('cartItems', this.cartItems);
    });
  }
  ngOnInit(): void {
    // this.loaderService.isLoading.set(true);
    // this.catalogService.getProducts().subscribe({
    //   next: (res) => {
    //     this.loaderService.isLoading.set(false);
    //     this.products = res;
    //     this.filteredProducts = this.products;
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     this.loaderService.isLoading.set(false);
    //     this.notificationService.showError(
    //       'Oops!',
    //       messageHelper.getErrorMessage(err)
    //     );
    //   },
    // });
  }

  productDetails(productId: number) {
    this.router.navigate(['/home/product-details', productId]);
  }

  addToCart(product: any) {
    //  this.cartService.addToCart(product);
    //  this.notificationService.showSuccess('Success', 'Product added to cart');
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
