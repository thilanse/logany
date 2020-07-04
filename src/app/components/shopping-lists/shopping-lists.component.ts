import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from 'src/app/models/ShoppingList';
import { Expenses } from 'src/app/models/Expenses';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {

  @Input() shoppingLists:ShoppingList[];


  constructor() { }

  ngOnInit(): void {
    
  }

}
