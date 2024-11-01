import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipes/square.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective, SquarePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  products: Iproduct[];
  filteredProducts: Iproduct[];
  totalOrderPrice: number = 0;
  // selectedCatId: number = 0;
  myDate: Date = new Date();
  num: number = 4;

  @Input() receivedCatId: number = 0;
  // 1- define the event
  @Output() onTotalPriceChanged: EventEmitter<number>;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Dell Laptop',
        price: 1200,
        quantity: 2,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 1
      },
      {
        id: 2,
        name: 'Hp Laptop',
        price: 800,
        quantity: 0,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 1
      },
      {
        id: 3,
        name: 'Iphone',
        price: 150,
        quantity: 0,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 2
      },
      {
        id: 4,
        name: 'OPPO',
        price: 250,
        quantity: 1,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 2
      },
      {
        id: 5,
        name: 'Samsung Tablet',
        price: 500,
        quantity: 12,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 3
      },
      {
        id: 6,
        name: 'Od Tablet',
        price: 650,
        quantity: 7,
        imgUrl: "https://fakeimg.pl/300/",
        catId: 3
      }
    ];

    this.filteredProducts = this.products;
    this.onTotalPriceChanged = new EventEmitter<number>
  }
  ngOnChanges() {
    this.filterProducts()
  }

  buy(count: string, price: number) {
    // this.totalOrderPrice = parseInt(count) * price;
    // this.totalOrderPrice = Number(count) * price;
    this.totalOrderPrice += +count * price;
    // 2- Fire the event
    this.onTotalPriceChanged.emit(this.totalOrderPrice);
  }

  // change() {
  //   this.selectedCatId = 3
  // }

  trackItem(index: number, item: Iproduct) {
    return item.id;
  }

  filterProducts() {
    if (this.receivedCatId == 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((prd) => prd.catId == this.receivedCatId);
    }
  }
}
