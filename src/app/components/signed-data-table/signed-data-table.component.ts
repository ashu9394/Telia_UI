import { Component, OnInit } from '@angular/core';
import {SignedDataService} from '../../signed-data.service'
import {SignedRecords} from '../../signed-records'
 
@Component({
  selector: 'app-signed-data-table',
  templateUrl: './signed-data-table.component.html',
  styleUrls: ['./signed-data-table.component.scss']
})
export class SignedDataTableComponent implements OnInit {

  constructor(private SignedDataService:SignedDataService) { }

  ngOnInit() {
    this.getSignedDocs()
  }

  public records = []
  async  getSignedDocs(){
    this.SignedDataService.getSignedDocumentsDetails().subscribe((recordData) => {
      this.records=recordData
    })
  }
}
