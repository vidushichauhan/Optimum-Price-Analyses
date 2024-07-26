import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  productName: string = '';
  selectedCategory: string = '';
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Toys'];

  private lottie: any;

  constructor(
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onProductNameChange() {
    this.sharedService.setData('title', this.productName);
  }

  onCategoryChange() {
    this.sharedService.setData('categoryName', this.selectedCategory);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('lottie-web').then(lottie => {
        this.lottie = lottie.default;
        this.lottie.loadAnimation({
          container: this.lottieContainer.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'assets/productAnimation.json' // Adjust the path to where you have stored the animation JSON file
        });
      });
    }
  }
}
