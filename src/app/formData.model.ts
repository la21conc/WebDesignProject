export class FormData {
    zip : string = '';
    firstName: string ='';
    lastName:  string =''; 
    phoneNumber: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    address: string = '';
    city: string = '';
    state:  string = '';
    cardName: string = '';
    cardNumber: string = '';
    experationDate: string ='';
    cvc: string = '';
    billingAddress: string = '';
    billingCity: string = '';
    billingState: string = '';
    billingZip: string = '';

    clear() {
        this.zip = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber ='';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.cardName = '';
        this.cardNumber = '';
        this.experationDate = '';
        this.cvc = '';
        this.billingAddress = '';
        this.billingCity = '';
        this.billingState = '';
        this.billingZip = '';       
    }
}
export class Signup{
    zip : string = '';
    firstName: string ='';
    lastName:  string ='';
    phoneNumber: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
}

export class Shipping {
    address: string = '';
    city: string = '';
    state:  string = '';
    zip: string = '';
}

export class Payment{
    cardName: string = '';
    cardNumber: string = '';
    experationDate: string ='';
    cvc: string = '';
    billingAddress: string = '';
    billingCity: string = '';
    billingState: string = '';
    billingZip: string = '';
}