import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 6),
    new Ingredient('Orange', 7),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
