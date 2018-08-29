import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {EditDialogComponent} from '../app/components/edit-dialog/edit-dialog.component'
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' Telia';

  constructor(public dialog:MatDialog){

  }
  private conf = {data:{name: 'Modal Test'}}
  public openModal(){
    this.dialog.open(EditDialogComponent, this.conf)
  }
}
