import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  rating: number = 3;
  comment: string = '';

  getEmoticonColor(value: number): string {
    if (value <= 1) return '#ED4337';
    if (value <= 2) return '#FF8C00';
    if (value <= 3) return '#FFD700';
    if (value <= 4) return '#9ACD32';
    return '#228B22';
  }
}