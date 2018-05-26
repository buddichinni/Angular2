import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';


import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { LoginComponent } from './login/login.component';
import { credentialsService } from './credentials-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    Test1Component,
    LoginComponent,
    credentialsService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [credentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
