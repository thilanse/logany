import { Component } from '@angular/core';
import { Log } from './models/Log';
import { LogService } from './services/log.service';
import { Item } from './models/Item';
import { ItemService } from './services/item.service';
import { Expenses } from './models/Expenses';
import { ShoppingListService } from './services/shopping-list.service';
import { ShoppingList } from './models/ShoppingList';
import { DateFormatter } from './Formatter/DateFormatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logany-frontend';

  logs: Log[] = [];
  recentLog:Log = new Log();
  items: Item[] = [];
  expenses:Expenses;
  shoppingLists:ShoppingList[];

  recentLogAvailable:boolean = false;

  constructor(private logService:LogService,
              private itemService:ItemService,
              private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    // this.logService.getLogs().subscribe(data => this.logs = data);
    this.itemService.getItems().subscribe(data => this.items = data);
    this.shoppingListService.getShoppingLists().subscribe(data => this.shoppingLists = data);
  }

  updateLogs(log:Log){
    this.logs.push(log);
  }

  updateRecentLog(log:Log){
    this.recentLog = log;
    this.recentLogAvailable = true;
  }

  deleteLog(log:Log){
    this.logs = this.logs.filter(item => item.id != log.id);
  }

  addItem(item:Item){
    this.items.push(item);
    // this.expenses.totalExpense += item.price;

    let currentDate = DateFormatter.getCurrentDate();
    let currentShoppingList = this.shoppingLists.filter(list => list.date == currentDate ).pop();

    if(typeof currentShoppingList == 'undefined'){
      const item_list:Item[] = []
      item_list.push(item)
      const list:ShoppingList = {
        date : currentDate,
        year: "",
        month: "",
        day: 0,
        items: item_list,
        totalPrice: item.price
      }
      this.shoppingLists.push(list);
    }else{
      currentShoppingList.items.push(item);
      currentShoppingList.totalPrice += item.price;
    }
    
  }
}