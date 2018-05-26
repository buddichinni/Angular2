import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Test1Component } from './test1/test1.component';
import { LoginComponent } from './login/login.component';

const routingTable: Routes = [
  {path:'test1', component: Test1Component},
  {path:'login',component:LoginComponent}
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
