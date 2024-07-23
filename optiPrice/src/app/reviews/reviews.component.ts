import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  rating: number = 0;
  comment: string = '';

  constructor(private sharedService: SharedService) {}

  onRatingChange() {
    this.sharedService.setData('stars', this.rating);
  }

  onCommentChange() {
    this.sharedService.setData('reviews', this.comment.length); // Example usage of comment length as review count
  }

  getEmoticonColor(value: number): string {
    return this.rating >= value ? 'orange' : 'grey';
  }
}
