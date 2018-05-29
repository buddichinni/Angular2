import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'app/credentials-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CredentialsService]
})
export class LoginComponent implements OnInit {
  
  details:string;
  constructor(private _credentialsService:CredentialsService) { 
  }
  ClickFunction(username:string,password:string){  
    this.details= this._credentialsService.add(username,password);
  }
  
  ngOnInit() {
  }
}
