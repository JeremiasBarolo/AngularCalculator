import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Using Angular';

  num1: number = 0;
  num2: number = 0;
  
  res: number = 0;

  add():void{
    this.res = this.num1 + this.num2;
    
  }
  subtract():void{
    this.res = this.num1 - this.num2;
    
  }
  multiply():void{
    this.res = this.num1 * this.num2;
    
  }
  divide():void{
    this.res = this.num1 / this.num2;
    
  }
}
