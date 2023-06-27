import { Component, Input, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/pages/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  constructor(private cartservide: CartService) {}

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  getTotal(items: Array<CartItem>) {
    return this.cartservide.getTotal(items);
  }

  handleClearCart() {
    this.cartservide.clearCart();
  }

  ngOnInit() {}
}
