import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {

    // resetea el formulario
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
    for (let item of this.items) {
      console.warn(item.name +" "+item.price);
    }
    //elimina los elemntos del xarrito de compras.
    this.items = this.cartService.clearCart();
  }
}
