import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Test1Component } from './test1/test1.component';
import { LoginComponent } from './login/login.component';
import{HeaderComponent} from './header/header.component';
import { ContentComponent } from 'app/content/content.component';
import {RegisterComponent} from 'app/register/register.component'

const routingTable: Routes = [
  {path:'test1', component: Test1Component},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'content/:parameterValue',component:ContentComponent} ,
  {path:'register',component:RegisterComponent} 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routingTable, { enableTracing: true })
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
