import { Medicine } from './../medicine';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Drug } from 'src/app/medicines-database/drug';

@Component({
  selector: 'app-add-medicine-dialog',
  templateUrl: './add-medicine-dialog.component.html',
  styleUrls: ['./add-medicine-dialog.component.css']
})
export class AddMedicineDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      medicine: [],
      startDate: [],
      endDate: [],
      interval: []
    });
  }


}
