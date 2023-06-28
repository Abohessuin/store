import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product.model";
const STORE_URL = "https://fakestoreapi.com";
@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getProducts(limit: number = 12, sort: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_URL}/products?limit=${limit}&sort=${sort}`
    );
  }
}
