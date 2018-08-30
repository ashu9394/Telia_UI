import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import {DataTableModule} from 'angular-6-datatable';
import {SignedDataService} from './signed-data.service'
import { AppComponent } from './app.component';
import { TeliaHeaderComponent } from './components/telia-header/telia-header.component';
import { SignedDataTableComponent } from './components/signed-data-table/signed-data-table.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';


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
    FormsModule,
    DataTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [SignedDataService],
  entryComponents : [EditDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
