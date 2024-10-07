import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { Testimonial } from '../testimonial.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  testimonials: Testimonial[] = [];
  constructor(private profileservice: ProfileService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.profileservice.getTestimonials().subscribe((data) => {
      this.testimonials = data;
      console.log(this.testimonials);
    });
  }

  dislikeProfile(profileId: number): void {
    this.testimonials = this.testimonials.filter(testimonial => testimonial.id !== profileId);
    this.toastr.success('Profile removed successfully!', 'Success');
  }

  navigatetoHome(){
    this.router.navigate(['']);
  }
}
