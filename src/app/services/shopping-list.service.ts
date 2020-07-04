import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingList } from '../models/ShoppingList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  shoppingListUrl = "https://logany-api.herokuapp.com/shoppingList";

  constructor(private http:HttpClient) { }

  getShoppingLists():Observable<ShoppingList[]>{
    return this.http.get<ShoppingList[]>(this.shoppingListUrl);
  }
}
