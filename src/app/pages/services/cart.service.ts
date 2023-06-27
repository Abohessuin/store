import { Product } from "./../../models/product.model";
import { Injectable } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { BehaviorSubject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackbar: MatSnackBar) {}

  addToCart(item: CartItem) {
    const items: any = [...this.cart.value.items];
    const itemInCart = items.find((_item: Product) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackbar.open("1 item added to cart.", "Ok", { duration: 3000 });
  }

  removeFromCart(item: CartItem) {
    const items: any = [...this.cart.value.items];

    const newItems: Array<CartItem> = items.filter(
      (_item: CartItem) => item.id != _item.id
    );
    this.cart.next({ items: newItems });
  }

  removeQuantity(item: CartItem) {
    const items: any = [...this.cart.value.items];
    const itemInCart = items.find((_item: Product) => _item.id === item.id);
    if (itemInCart && itemInCart.quantity == 1) {
      this.removeFromCart(item);
    } else {
      const newItems = items.map((_item: CartItem) => {
        if (_item.id == item.id) {
          _item.quantity -= 1;
          return _item;
        } else {
          return _item;
        }
      });
      this.cart.next({ items: newItems });
    }

    this._snackbar.open("1 item removed from cart.", "Ok", { duration: 3000 });
  }

  getTotal(items: Array<CartItem>) {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart() {
    this.cart.next({ items: [] });
    this._snackbar.open("cart cleared", "Ok", { duration: 3000 });
  }
}
