import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  nestedForm: FormGroup;
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // without validation
    /*this.checkoutForm = formbuilder.group({
        email: new FormControl(),  // this must be same as the value passed in formcontrolname in email textbox
        quantity: new FormControl()
    });*/

    // with validation
    this.checkoutForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      quantity: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });

   }

  ngOnInit(): void {
    // Set value using setValue() : must have to pass all filed
    /*this.checkoutForm.setValue({
      email: 'user@xyz.com',
      quantity: '234'
    });*/

    // Set value using patchValue() : can ommit/leave any filed.
    /*this.checkoutForm.patchValue({
      quantity: '234'
    });*/

    // use valueChanges() to track the values ie. here we take email example
    /*this.checkoutForm.get('email').valueChanges.subscribe(data => {
      console.log(data);
    });*/

      // valueChanges() to track the any values from all.
    /*this.checkoutForm.valueChanges.subscribe(data => {
      console.log(data);
    });*/

    // use statusChanges() to track the status of values (valid or invalid) ie. here we take email example
    /*this.checkoutForm.get('email').statusChanges.subscribe(data => {
      console.log(data);
    });*/

    // use statusChange() to track status of all value
    /*this.checkoutForm.statusChanges.subscribe(data => {
      console.log(data);
    });*/
  }

  // tslint:disable-next-line: typedef
  postData(){
    console.log(this.checkoutForm.value.email);
    console.log(this.checkoutForm.value.quantity);
  }

  // tslint:disable-next-line: typedef
  resetForm(){
    this.checkoutForm.reset();
  }

}
