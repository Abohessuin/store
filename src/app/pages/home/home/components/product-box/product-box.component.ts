import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() productAdded = new EventEmitter();
  product: Product | undefined = {
    id: 1,
    title: "test",
    price: 100,
    category: "test",
    description: "test",
    image:
      "https://media.istockphoto.com/id/1163986081/fr/photo/choisis-de-grands-concepts-did%C3%A9es-avec-la-main-masculine-utilisant-la-loupe-recherchant-le.jpg?s=1024x1024&w=is&k=20&c=16JVTO6GaFKxFB2BiO2U5b0DLv_2aDrX5PLwT2ECjO8=",
  };
  constructor() {}

  ngOnInit() {}

  handleAddToCart() {
    this.productAdded.emit(this.product);
  }
}
