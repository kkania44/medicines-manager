import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Drug } from '../drug';

@Component({
  selector: 'app-add-drug-dialog',
  templateUrl: './add-drug-dialog.component.html',
  styleUrls: ['./add-drug-dialog.component.css']
})
export class AddDrugDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private dialog: MatDialogRef<AddDrugDialogComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [],
      dose: [],
      type: [],
      manufacturer: []
    });
  }

  addMedicine() {
    const medicine: Drug = this.form.value;
    this.http.post('http://localhost:8100/medicine', medicine).subscribe(() => this.dialog.close());
  }

}
