import { Prescription } from './../prescription';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-prescription-dialog',
  templateUrl: './edit-prescription-dialog.component.html',
  styleUrls: ['./edit-prescription-dialog.component.css']
})
export class EditPrescriptionDialogComponent implements OnInit {
  form: FormGroup;
  statuses = [ 'w trakcie realizacji', 'niezrealizowana', 'zrealizowana'];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Prescription) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      code: [ this.data.code ],
      description: [ this.data.description ],
      status: [ this.data.status ]
    });
  }
}
