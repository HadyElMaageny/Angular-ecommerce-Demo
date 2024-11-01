import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCatId: number = 0;
  categories: Icategory[];
  totalOrderPrice: number = 0;
  constructor() {
    this.categories = [
      {
        name: "Laptop",
        id: 1
      },
      {
        name: "Phone",
        id: 2
      },
      {
        name: "Tablet",
        id: 3
      }
    ]
  }

  calcTotalPrice(newTotalOrderPrice: number) {
    this.totalOrderPrice = newTotalOrderPrice
  }
}
