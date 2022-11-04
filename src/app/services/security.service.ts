import { Injectable } from '@angular/core';
import { Client } from '../model/userClient.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  users: Client[] = [
    {
      id: 'U001',
      correo: 'example@example.org',
      pass: '1234',
      dateRegister: new Date(),
    },
    {
      id: 'U002',
      correo: 'example2@example.org',
      pass: '12345',
      dateRegister: new Date(),
    }
  ];
  userActive: Client | undefined = undefined;

  constructor() { }

  userEmpty(): Client{
    return{
      id: '0',
      correo: '',
      pass: '',
      dateRegister: new Date(),
    }
  }
  validateUser(correo:string, pass:string): boolean{
    const user: Client | undefined = this.users.find(usr=>{
      return (usr.correo === correo && usr.pass === pass)
    });
    if(user === undefined){
      console.log("intento fallido");
      this.userActive = undefined;
      return false;
    }
    this.userActive = user;
    console.log('Usuario encontrado');
    console.log(this.userActive);
    return true;
  }
}