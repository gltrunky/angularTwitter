import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwListComponent } from './components/tw-list/tw-list.component';
import { TwAddComponent } from './components/tw-add/tw-add.component';
import { TwFormAddComponent } from './components/tw-form-add/tw-form-add.component';
import { TwEditComponent } from './components/tw-edit/tw-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TwListComponent,
    TwAddComponent,
    TwFormAddComponent,
    TwEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
