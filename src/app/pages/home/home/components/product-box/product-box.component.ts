import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() productAdded = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleAddToCart() {
    this.productAdded.emit(this.product);
  }
}
