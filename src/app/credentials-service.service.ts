import { Injectable } from '@angular/core';


@Injectable(  )
export class CredentialsService {

  constructor() { }
  loginId: string = "Purnima";
  pwd: string = "test";
  
   add(usrnm: string,pswd:string) {
    alert(usrnm+pswd);
    console.log(usrnm);
    return usrnm;
   }
}
