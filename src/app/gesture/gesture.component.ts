import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Testimonial } from '../testimonial.model';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent implements OnInit {
  testimonials: Testimonial[] = [];
  activeIndex: number = 0;
  swipeDirection: string = '';
  isLiked: boolean = false;
isDisliked: boolean = false;
 
  constructor(private router: Router, private profileservice: ProfileService) { }

  ngOnInit(): void {
    this.profileservice.getTestimonials().subscribe((data) => {
      this.testimonials = data;
      console.log("LLL",this.testimonials);
    });
  }
  navigatetoHome(){
    this.router.navigate(['']);
  }
  likeProfile(): void {
    this.swipeDirection = 'left';
    this.performSwipe();
    this.isLiked = true;
    this.isDisliked = false;
  }

  dislikeProfile(): void {
    this.swipeDirection = 'right'; 
    this.performSwipe();
    this.isDisliked = true;
    this.isLiked = false; 
  }

  performSwipe(): void {
    setTimeout(() => {
      this.moveToNextProfile();
      this.swipeDirection = ''; 
    }, 300); 
  }

  
  moveToNextProfile(): void {
    if (this.activeIndex < this.testimonials.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; 
    }
  }

}
