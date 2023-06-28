import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SortBy } from "../../models/productHeader.model";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  @Output() coloumsCountChange = new EventEmitter<number>();
  @Output() sortBy = new EventEmitter<string>();
  sorts: SortBy[] = [
    { value: "desc", label: "desc" },
    { value: "asc", label: "asc" },
  ];
  itemsNumbers = [
    { value: 12, label: "12" },
    { value: 24, label: "24" },
    { value: 36, label: "36" },
  ];
  sort = "desc";
  numberItems = "12";
  constructor() {}

  ngOnInit() {}

  handleUpdateSort(sort: SortBy) {
    this.sort = sort.value;
    this.sortBy.emit(sort.label);
  }
  handleUpdateNumberItems(item: any) {
    this.numberItems = item.value;
  }
  handleUpdateColumns(colsNum: number) {
    this.coloumsCountChange.emit(colsNum);
  }
}
