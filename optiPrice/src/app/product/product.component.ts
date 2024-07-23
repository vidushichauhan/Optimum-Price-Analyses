import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productName: string = '';
  selectedCategory: string = '';
  categories = ['Electronics', 'Household Products', 'Clothing', 'Books'];

  constructor(private sharedService: SharedService) {}

  onProductNameChange() {
    this.sharedService.setData('title', this.productName);
  }

  onCategoryChange() {
    this.sharedService.setData('categoryName', this.selectedCategory);
  }
}
