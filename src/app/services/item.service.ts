import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { Expenses } from '../models/Expenses';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response' as const,
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemUrl = "https://logany-api.herokuapp.com/items";
  deleteUrl:string;

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  addItem(item:Item):Observable<HttpResponse<Item>>{
    return this.http.post<Item>(this.itemUrl, item, httpOptions);
  }

  deleteItem(id:string){
    var deleteUrl = `${this.itemUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

  getExpenses():Observable<Expenses>{
    var expenseUrl = `${this.itemUrl}/total`;
    return this.http.get<Expenses>(expenseUrl);
  }
}
