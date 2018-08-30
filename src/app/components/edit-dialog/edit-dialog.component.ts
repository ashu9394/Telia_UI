import { Component, OnInit, Inject, NgModule} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})

export class EditDialogComponent implements OnInit {

  form: FormGroup;
  description:string;

  public selectedRowData : {}
  
  constructor(
      private dialogRef: MatDialogRef<EditDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.selectedRowData = data
      }

  ngOnInit() {
  }

  public update(){
    console.log(this.selectedRowData)
    this.dialogRef.close()
  }
  
  public close(){
      this.dialogRef.close()
  }
}


