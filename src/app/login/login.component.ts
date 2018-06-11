import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'app/credentials-service.service';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CredentialsService]
})
export class LoginComponent implements OnInit {
  
  details:string;
  constructor(private _credentialsService:CredentialsService,private router:Router) { 
  this.details=this._credentialsService.Authenticate("sd","sds");  
  }
  ClickFunction(username:string,password:string){  
    this.details= this._credentialsService.Authenticate(username,password);
    if(this.details!="Invalid credentials"){
      this.router.navigate(['/content']);
    }
  }
  
  ngOnInit() {
  }
}
