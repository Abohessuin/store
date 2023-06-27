import { CartService } from "../services/cart.service";
import { Cart, CartItem } from "./../../models/cart.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [],
  };

  constructor(private cartService: CartService) {}
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>) {
    return this.cartService.getTotal(items);
  }

  handleAddItemToCart(item: CartItem) {
    this.cartService.addToCart(item);
  }

  handleRemoveItemFromCart(item: CartItem) {
    this.cartService.removeQuantity(item);
  }

  handleRemoveItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  handleClearAll() {
    this.cartService.clearCart();
  }
}
