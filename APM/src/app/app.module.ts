import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Year2021Component } from './Yangyang/Year-2021.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Year2021Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule. forRoot([
      { path:'welcome', component: WelcomeComponent },
      { path:'', redirectTo: 'welcome', pathMatch: 'full' },
      { path:'***', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
