import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo: string = '';
  pass: string = '';
  @Output() login = new EventEmitter();

  constructor(private securityService: SecurityService, private router: Router) { }

  ngOnInit(): void {
  }
  getInto(): void{
   if(this.securityService.validateUser(this.correo, this.pass)){
      this.login.emit();
      this.router.navigate(['/home']);
    }else{
      alert('Email or Password wrong');
    }
  }
}
