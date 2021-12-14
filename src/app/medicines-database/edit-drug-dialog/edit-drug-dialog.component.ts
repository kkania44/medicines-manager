import { Drug } from './../drug';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-drug-dialog',
  templateUrl: './edit-drug-dialog.component.html',
  styleUrls: ['./edit-drug-dialog.component.css']
})
export class EditDrugDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialog: MatDialogRef<EditDrugDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Drug
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      id: [ this.data.id ],
      name: [ this.data.name ],
      dose: [ this.data.dose ],
      type: [ this.data.type ],
      manufacturer: [ this.data.manufacturer ]
    });
  }

  updateMedicine() {
    const medicine = this.form.value;
    this.http.patch('http://localhost:8100/medicine', medicine)
      .subscribe(() => this.dialog.close());
  }

}
