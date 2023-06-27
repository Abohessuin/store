import { Component, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit {
  categories = ["food", "clothes", "drinks", "furniture", "grocery", "meat"];
  selectedCategory = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  handleSelectCategory(cate: any) {
    this.selectedCategory.emit(cate);
  }
}
