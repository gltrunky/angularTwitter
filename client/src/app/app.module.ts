import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwListComponent } from './components/tw-list/tw-list.component';
import { TwAddComponent } from './components/tw-add/tw-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TwListComponent,
    TwAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
