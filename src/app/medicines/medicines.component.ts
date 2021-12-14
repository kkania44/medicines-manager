import { DataHolderService } from './../data-holder.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Drug } from 'src/app/medicines-database/drug';
import { EditMedicineDialogComponent } from './edit-medicine-dialog/edit-medicine-dialog.component';
import { AddMedicineDialogComponent } from './add-medicine-dialog/add-medicine-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedicineAssignment, MedicineDose, DrugDto, MedicineAssignments } from './medicine';
import { config } from 'process';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  displayedColumns = [ 'name', 'applicationDate', 'dose', 'edit', 'delete'];
  allDrugs: Drug[];
  medicineAssignments: MedicineAssignment[];

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    let params = new HttpParams();
    params = params.set('userId', userId);
    this.http.get<MedicineAssignment[]>('http://localhost:8100/drugsassignment', {params})
    .subscribe(data => this.medicineAssignments = data);
    this.http.get<Drug[]>('http://localhost:8100/medicine').subscribe(data => this.allDrugs = data);
  }

  getName(id: number) {
    return this.allDrugs.filter(m => m.id === id)[0].name;
  }

  getDose(id: number) {
    return this.allDrugs.filter(m => m.id === id)[0].dose;
  }

  goToMedicines() {
    this.router.navigateByUrl('lekarstwa');
  }

  goToPrescriptions() {
    this.router.navigateByUrl('recepty');
  }

  goToMedicinesDatabase() {
    this.router.navigateByUrl('wszystkieLekarstwa');
  }

  edit(dose: MedicineAssignments) {
    console.log(dose);
    this.dialog.open(EditMedicineDialogComponent, { data: dose, width: '400px' }).afterClosed()
      .subscribe(() => location.reload());
  }

  addMedicine() {
    this.dialog.open(AddMedicineDialogComponent, { width: '400px' } ).afterClosed()
      .subscribe(() => location.reload());
  }

  deleteMedicine(medicine: MedicineAssignment) {
    this.dialog.open(DeleteDialogComponent, { data: 'lek' }).afterClosed()
      .subscribe(() => location.reload());
  }

}
