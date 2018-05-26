import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public credentialservice:CredentialsServiceService) { }

  ngOnInit() {
  }

}
function ClickFunction(username,password){
alert(username+"&"+password);
}
export class CredentialsServiceService {

}
