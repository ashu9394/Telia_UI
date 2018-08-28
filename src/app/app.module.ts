import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular-6-datatable';

import { AppComponent } from './app.component';
import { TeliaHeaderComponent } from './components/telia-header/telia-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TeliaHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
