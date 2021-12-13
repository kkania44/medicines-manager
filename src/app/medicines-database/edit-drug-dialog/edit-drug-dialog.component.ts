import { Drug } from './../drug';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-drug-dialog',
  templateUrl: './edit-drug-dialog.component.html',
  styleUrls: ['./edit-drug-dialog.component.css']
})
export class EditDrugDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Drug
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      medicine: [ this.data.name ],
      startDate: [ this.data.dose ],
      endDate: [ this.data.type ],
      interval: [ this.data.manufacturer ]
    });
  }

}
