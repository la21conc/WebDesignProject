import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Signup } from '../formData.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: Signup;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.signup = this.formDataService.getSignup();
    console.log('Signup feature loaded');
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setSignup(this.signup);
    return true;
}
goToNext(form: any) {
  if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/shipping']);
  }
}


}
