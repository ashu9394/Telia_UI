import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {DataTableModule} from 'angular-6-datatable';
import {SignedDataService} from './signed-data.service'
import { AppComponent } from './app.component';
import { TeliaHeaderComponent } from './components/telia-header/telia-header.component';
import { SignedDataTableComponent } from './components/signed-data-table/signed-data-table.component';
import {MatDialogModule} from "@angular/material";
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TeliaHeaderComponent,
    SignedDataTableComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [SignedDataService],
  entryComponents : [EditDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
