import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Testimonial } from '../testimonial.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  testimonials: Testimonial[] = [];
  constructor(private profileservice: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileservice.getTestimonials().subscribe((data) => {
      this.testimonials = data;
      console.log(this.testimonials);
    });
  }

  navigatetoHome(){
    this.router.navigate(['']);
  }
}
