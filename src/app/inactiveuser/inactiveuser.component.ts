import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inactiveuser',
  templateUrl: './inactiveuser.component.html',
  styleUrls: ['./inactiveuser.component.css']
})
export class InactiveuserComponent implements OnInit {
  @Input() userEle:string
  @Output() elementStateChange = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  changeState(evtData){
    // console.log(evtData.toElement.text)
    this.elementStateChange.emit(evtData.toElement.text)
  }

}