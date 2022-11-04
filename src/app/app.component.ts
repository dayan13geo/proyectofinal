import { Component } from '@angular/core';
//import { Calculator } from './testing';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  thisLoged: boolean = this.securityService.userActive !== undefined;
  constructor(private securityService: SecurityService){

  }
  ngOnInit(){
    // const calculator = new Calculator();
    // const rpta = calculator.multiplicar(3,3);
    // console.log(rpta === 9);
  }
  updateLogin(): void{
    this.thisLoged = this.securityService.userActive !== undefined;
  }
}
