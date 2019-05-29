
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { MaterializeModule } from 'angular2-materialize';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AutenticService } from './login/autentic.service';
// import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    // routing,
    // MaterializeModule
  ],
  providers: [AutenticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
