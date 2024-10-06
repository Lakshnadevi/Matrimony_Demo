import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Testimonial } from '../testimonial.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentIndex: number = 0; 

  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  constructor(private profileservice: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profileservice.getTestimonials().subscribe((data) => {
      this.testimonials = data;
      console.log(this.testimonials);
    });
  }

  scrollRight(): void {
    if (this.currentIndex < this.testimonials.length - 3) {
      this.currentIndex += 1; 
    }
  }

  scrollLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1; 
    }
  }

  navigateToGestureScreen() {
    this.router.navigate(['/gesture']);
  }

  viewProfileDetails(testimonialId: number) {
    console.log('Navigating to profile with ID:', testimonialId);
    this.router.navigate([`/profile-details`, testimonialId]);
  }
}
