import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Product } from "src/app/models/product.model";
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  selectedCategory: undefined | string;

  constructor(private _cartService: CartService) {}

  ngOnInit() {}

  onColunsCountChange(event: any) {
    this.cols = event;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onCategoryChange(event: any) {
    this.selectedCategory = event;
  }

  handleAddTOCart(product: Product) {
    this._cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
