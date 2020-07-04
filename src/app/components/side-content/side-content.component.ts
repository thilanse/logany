import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Log } from 'src/app/models/Log';
import { Item } from 'src/app/models/Item';
import { DateFormatter } from 'src/app/Formatter/DateFormatter';
import { ItemService } from 'src/app/services/item.service';
import { Expenses } from 'src/app/models/Expenses';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit {

  @Input() logs:Log[];
  @Input() recentLog:Log;
  @Input() recentLogAvailable:boolean;
  @Input() items:Item[];
  expenses:Expenses;
  
  @Output() newItem = new EventEmitter();

  itemName:string;
  itemPrice:string;
  itemAmount:string;
  itemUnit:string;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getExpenses().subscribe(data => this.expenses = data );
  }

  addItem(){
    if(typeof this.itemName === 'undefined' ||
        typeof this.itemPrice === 'undefined' ||
        typeof this.itemAmount === 'undefined' ){
    }else{
      const item:Item = {
        id: null,
        itemName: this.itemName,
        price: parseFloat(this.itemPrice),
        amount: parseInt(this.itemAmount),
        units: (typeof this.itemUnit !== 'undefined') ? this.itemUnit: "",
        addedDate: DateFormatter.getCurrentDate()
      }
      this.itemService.addItem(item).subscribe( res => item.id = res.body.id );
      this.newItem.emit(item);

      this.itemName = "";
      this.itemPrice = "";
      this.itemAmount = "";
      this.itemUnit = "";
    }
  }
}
