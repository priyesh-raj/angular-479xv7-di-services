import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {
  @Input() userEle:string 
  constructor() { }

  ngOnInit() {
  }

}