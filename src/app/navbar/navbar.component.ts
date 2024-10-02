import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';



export interface Element {
  column1: string;
  column2: string;
}

const ELEMENT_DATA: Element[] = [
  { column1: 'T-Shirts', column2: 'Item 1B' },
  { column1: 'Casual Shirts', column2: 'Item 2B' },
  { column1: 'Formal Shirts', column2: 'Item 3B' },
  { column1: 'Sweatshirts', column2: 'Item 4B' },
  { column1: 'Sweaters', column2: 'Item 5B' },
  { column1: 'Jackets', column2: 'Item 5B' },
  { column1: 'Blazers & Coats', column2: 'Item 5B' },
  { column1: 'Suits', column2: 'Item 5B' },
  { column1: 'Rain Jackets', column2: 'Item 5B' },


  // Add more items as needed
];

interface MenuItem {
  name: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,

    MatTableModule,
    CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  displayedColumns: string[] = ['column1', 'column2'];
  dataSource = ELEMENT_DATA;
  menuData: MenuCategory[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuData = [
      {
        title: 'Topwear',
        items: [
          { name: 'T-Shirts' },
          { name: 'Casual Shirts' },
          { name: 'Formal Shirts' },
          { name: 'Sweatshirts' },
          { name: 'Sweaters' },
          { name: 'Jackets' },
          { name: 'Blazers & Coats' },
          { name: 'Suits' },
          { name: 'Rain Jackets' }
        ]
      },
      {
        title : 'Indian & Festive Wear',
        items : [
          {name: 'Kurtas & Kurta Sets'},
          {name: 'Sherwanis'},
          {name: 'Nehru Jackets'},
          {name: 'Dhotis'}
        ]
      },
      {
        title: 'Bottomwear',
        items: [
          { name: 'Jeans' },
          { name: 'Casual Trousers' },
          { name: 'Formal Trousers' },
          { name: 'Shorts' },
          { name: 'Track Pants & Joggers' }
        ]
      },
      {
        title: 'Footwear',
        items: [
          { name: 'Casual Shoes' },
          { name: 'Sports Shoes' },
          { name: 'Formal Shoes' },
          { name: 'Sneakers' },
          { name: 'Sandals & Floaters' }
        ]
      },
      {
        title: 'Fashion Accessories',
        items: [
          { name: 'Wallets' },
          { name: 'Belts' },
          { name: 'Perfumes & Body Mists' },
          { name: 'Trimmers' },
          { name: 'Deodorants' }
        ]
      }
    ];
  }

  categories: string[] = ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'];

  menuItems = [
    {
      label: 'MEN',
      subcategories: ['Kurtas & Suits', 'Tshirts', 'Jeans', 'Footwear', 'Sports Wear', 'Watches']
    },
    {
      label: 'WOMEN',
      subcategories: ['Ethnic Wear', 'Western Wear', 'Footwear', 'Jewellery', 'Bags & Wallets', 'Beauty & Personal Care']
    },
    {
      label: 'KIDS',
      subcategories: ['Tshirts', 'Jeans', 'Dresses', 'Sports Wear', 'Shoes', 'Accessories']
    },
    // Add more menu categories as needed
  ];

}
