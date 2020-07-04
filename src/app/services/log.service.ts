import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Log } from '../models/Log';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response' as const,
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logUrl = "https://logany-api.herokuapp.com/logs";
  // deleteUrl:string;

  constructor(private http:HttpClient) { }

  getLogs():Observable<Log[]>{
    return this.http.get<Log[]>(this.logUrl);
  }

  addLog(log:Log):Observable<HttpResponse<Log>>{
    return this.http.post<Log>(this.logUrl, log, httpOptions);
  }

  deleteLog(id:string){
    var deleteUrl = `${this.logUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }
}
