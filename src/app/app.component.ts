import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  changeEle:string
  activeUsers=['Max','Charles']
  inactiveUsers=['Alonso','Michael']

  inactiveChange(eleName:string) {
    this.activeUsers.push(eleName)
    for(let i =0;i == this.inactiveUsers.length;i++){
      if(this.inactiveUsers[i] == eleName) {this.inactiveUsers.pop()} 
    }
  }
}
