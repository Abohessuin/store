import { StoreService } from "./../../services/store.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Product } from "src/app/models/product.model";
import { Subscription } from "rxjs";
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  selectedCategory: undefined | string;
  products: Array<Product> | undefined;
  limit = 10;
  sort = "asc";
  productSubscriptions: Subscription | undefined;
  loading = false;
  constructor(
    private _cartService: CartService,
    private _storeService: StoreService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productSubscriptions = this._storeService
      .getProducts(this.limit, this.sort)
      .subscribe((_products) => {
        this.products = _products;
        this.loading = false;
      });
  }

  onColunsCountChange(event: any) {
    this.cols = event;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onCategoryChange(event: any) {
    this.selectedCategory = event;
  }

  handleChangeSortBy(sort: string) {
    this.sort = sort;
    this.getProducts();
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
  ngOnDestroy(): void {
    if (this.productSubscriptions) {
      this.productSubscriptions.unsubscribe();
    }
  }
}
