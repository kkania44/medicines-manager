import { HttpClient } from '@angular/common/http';
import { MedicineAssignment, MedicineAssignments } from './../medicine';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDrugDialogComponent } from 'src/app/medicines-database/edit-drug-dialog/edit-drug-dialog.component';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { Drug } from 'src/app/medicines-database/drug';
import { AddMedicineDialogComponent } from '../add-medicine-dialog/add-medicine-dialog.component';

@Component({
  selector: 'app-edit-medicine-dialog',
  templateUrl: './edit-medicine-dialog.component.html',
  styleUrls: ['./edit-medicine-dialog.component.css']
})
export class EditMedicineDialogComponent implements OnInit {
  form: FormGroup;
  drugs: Drug[];
  userId: any;

  constructor(
    private dialog: MatDialogRef<AddMedicineDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: MedicineAssignments,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    console.log(this.userId);
    this.http.get<Drug[]>('http://localhost:8100/medicine').subscribe(data => this.drugs = data);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      doseInterval: [ this.data.doseInterval ],
      startDate: [ this.data.startDate ],
      numberOfDosage: [ this.data.numberOfDosage],
      user_id: [ this.userId ],
      medicine_id: [ this.data.medicine_id ],
    });
  }

  updateMedicineAssigment() {
    const medicine = this.form.value;
    this.http.patch('http://localhost:8100/drugsassignment', medicine)
      .subscribe(() => this.dialog.close());
  }

  delete() {
    this.http.delete('http:localhost:8100/drugsassignment')
      .subscribe(() => this.dialog.close())
  }

}
