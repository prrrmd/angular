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
    // with validation
    this.checkoutForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      quantity: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],

      items: this.formBuilder.array([

        // simple form array with new elements : 3 product
        /*new FormControl('ASUS_ROG'),
        new FormControl('ASUS_0XD'),
        new FormControl('ASUS_XENPHONE')*/

        // nested form ontrols in array ie items[{id1,name1},{id2,name2}
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['ASUS_0XD']
        })

      ])
    });

   }

  ngOnInit(): void {
  }

  postData(){
    console.log(this.checkoutForm.value.email);
    console.log(this.checkoutForm.value.quantity);
  }

  resetForm(){
    this.checkoutForm.reset();
  }

  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }

  addRow()
  {
    const itemLen = this.items.length;
    const newItem = this.formBuilder.group({
      itemId: [itemLen + 1],
      itemName: ['']
    });
    this.items.push(newItem);
  }

  removeRow(itemId)
  {
    this.items.removeAt(itemId);
  }

}
