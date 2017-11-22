import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Test1Component } from './test1/test1.component';

const routingTable: Routes = [
  {path:'test1', component: Test1Component}
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
