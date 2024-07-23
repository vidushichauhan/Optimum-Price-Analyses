import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  currentPrice: number = 0;
  predictedPrice: number | null = null;

  predictPrice() {
    // This is a placeholder function. In a real application, 
    // you would call a service to get the predicted price.
    this.predictedPrice = this.currentPrice * 1.1; // 10% increase for demonstration
  }
}