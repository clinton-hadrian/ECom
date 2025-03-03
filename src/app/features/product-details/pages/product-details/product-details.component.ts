import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../../product-details.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../../core/services/notification.service';
import { messageHelper } from '../../../../shared/helpers/message.helper';
import { PrimengModule } from '../../../../shared/modules/primeng/primeng.module';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../../core/services/loader.service';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PrimengModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productDetails!: any;
  wish: boolean = false;
  constructor(
    private productDetailsService: ProductDetailsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private loaderService: LoaderService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = parseInt(params.get('productId') || '');
      if (productId) this.loaderService.isLoading.set(true);
      this.productDetailsService.getProductById(productId).subscribe({
        next: (res) => {
          this.loaderService.isLoading.set(false);
          console.log(res);
          this.productDetails = res;
        },
        error: (err) => {
          this.loaderService.isLoading.set(false);
          this.notificationService.showError(
            'Oops!',
            messageHelper.getErrorMessage(err)
          );
        },
      });
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.notificationService.showSuccess('Success', 'Product added to cart');
  }

  wishToggle() {
    this.wish = !this.wish;
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
