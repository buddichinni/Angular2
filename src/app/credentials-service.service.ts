import { Injectable } from '@angular/core';


@Injectable(  )
export class CredentialsService {

  constructor() { }
  loginId: string = 'Purnima';
  pwd: string = 'purnima@123';
  credentials:string='';
   Authenticate(usrnm: string,pswd:string) {
     if(usrnm==this.loginId && pswd ==this.pwd){
       this.credentials=usrnm+pswd;
     return this.credentials;           
     }
     else
    return "Invalid credentials";        
   }
}
