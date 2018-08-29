import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {DataTableModule} from 'angular-6-datatable';
import {SignedDataService} from './signed-data.service'
import { AppComponent } from './app.component';
import { TeliaHeaderComponent } from './components/telia-header/telia-header.component';
import { SignedDataTableComponent } from './components/signed-data-table/signed-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TeliaHeaderComponent,
    SignedDataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule
  ],
  providers: [SignedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
