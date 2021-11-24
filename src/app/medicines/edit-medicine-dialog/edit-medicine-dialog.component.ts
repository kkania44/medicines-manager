import { Medicine, MedicineDose } from './../medicine';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-medicine-dialog',
  templateUrl: './edit-medicine-dialog.component.html',
  styleUrls: ['./edit-medicine-dialog.component.css']
})
export class EditMedicineDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Medicine
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      medicine: [ this.data.name ],
      startDate: [ this.data.startDate ],
      endDate: [ this.data.endDate ],
      interval: [ this.data.interval ]
    });
  }

}
