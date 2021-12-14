import { User } from './../../registration/user';
import { DataHolderService } from './../../data-holder.service';
import { MedicineAssignment, MedicineAssignments } from './../medicine';
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
  drugs: Drug[];
  userId: any;

  constructor(
    private dialog: MatDialogRef<AddMedicineDialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    console.log(this.userId);
    this.http.get<Drug[]>('http://localhost:8100/medicine').subscribe(data => this.drugs = data);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      doseInterval: [],
      startDate: [],
      numberOfDosage: [],
      user_id: [ this.userId ],
      medicine_id: [],
    });
  }

  add() {
    const assignment = this.form.value;
    assignment.startDate = new Date(assignment.startDate).toISOString();
    this.http.post('http://localhost:8100/drugsassignment', assignment).subscribe(() => this.dialog.close());
  }


}
