import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Payment, Shipping } from '../formData.model';
import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
payment: Payment;
shipping: Shipping;
form: any;
  constructor(private router:Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.payment = this.formDataService.getPayment();
    console.log('Payment feature loaded');
    this.shipping = this.formDataService.getShipping();
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setPayment(this.payment);
    return true;
}
  SetBilling() {
	
    var address = this.shipping.address;
    var city = this.shipping.city;
    var state = this.shipping.state;
    var zip = this.shipping.zip; 

    this.payment.billingAddress = address;
    this.payment.billingCity = city;
    this.payment.billingState = state;
    this.payment.billingZip = zip;      
	
   
}

goToPrevious() {
 
      // Navigate to the personal page
      this.router.navigate(['/shipping']);
  
}

goToNext(form: any) {
  if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/confirm']);
  }
}
}
