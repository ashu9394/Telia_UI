import { Component, OnInit } from '@angular/core';
import {SignedDataService} from '../../signed-data.service'
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component'
import {MatDialog} from "@angular/material";
 
@Component({
  selector: 'app-signed-data-table',
  templateUrl: './signed-data-table.component.html',
  styleUrls: ['./signed-data-table.component.scss']
})
export class SignedDataTableComponent implements OnInit {

  constructor(private SignedDataService:SignedDataService,public dialog:MatDialog) { }

  ngOnInit() {
    this.getSignedDocs()
  }

  public records = []
  public  getSignedDocs(){
    this.SignedDataService.getSignedDocumentsDetails().subscribe((recordData) => {
      this.records=recordData
    })
  }

  private conf = {data:{id: '',name:''}}
  public editSignedData(item){
    this.conf.data.id = item.id
    this.conf.data.name = item.name
    this.dialog.open(EditDialogComponent, this.conf)
  }
}
