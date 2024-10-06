import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonial } from '../testimonial.model';

@Injectable({

  providedIn: 'root'
})
export class ProfileService {

  private jsonUrl = '/assets/db.json'; 

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.jsonUrl);
  }

  getProfiles(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

}
