import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Log } from 'src/app/models/Log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  @Input() logs:Log[];
  @Output() insertLog = new EventEmitter();
  @Output() deletedLog = new EventEmitter();
  @Output() recentLog = new EventEmitter();

  text:string;
  
  constructor(private logService:LogService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(typeof this.text === 'undefined'){
    }else{
      const log = {
        id: null,
        text: this.text,
        createdDate: this.getCurrentDate(),
        updatedDate: ""
      }
      this.logService.addLog(log)
        .subscribe( res => log.id = res.body.id );
      this.insertLog.emit(log);
      this.recentLog.emit(log);
      this.text = ""
    }
  }

  getCurrentDate(){
    var date = new Date();
    var dd = date.getDate().toString();
    var mm = (date.getMonth() + 1).toString();
    var yyyy = date.getFullYear().toString();

    return mm+"/"+dd+"/"+yyyy;
  }

  editLog(log:Log){
    console.log(log.id);
  }

  deleteLog(log:Log){
    this.logService.deleteLog(log.id.toString()).subscribe();
    this.deletedLog.emit(log);
  }

}
