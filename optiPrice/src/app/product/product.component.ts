import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productName: string = '';
  selectedCategory: string = '';
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Toys'];
}