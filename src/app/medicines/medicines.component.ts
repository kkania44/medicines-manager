import { AddMedicineDialogComponent } from './add-medicine-dialog/add-medicine-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedicineDose } from './medicine';
import { config } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  doses: MedicineDose[] = [
    { name: 'Lek 1', applicationDate: new Date() },
    { name: 'Lek 2', applicationDate: new Date() },
    { name: 'Lek 3', applicationDate: new Date() },
    { name: 'Lek 1', applicationDate: new Date() },
    { name: 'Lek 2', applicationDate: new Date() },
    { name: 'Lek 3', applicationDate: new Date() }
  ];
  displayedColumns = [ 'name', 'applicationDate', 'edit', 'delete'];

  constructor(
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToMedicines() {
    this.router.navigateByUrl('lekarstwa');
  }

  goToPrescriptions() {
    this.router.navigateByUrl('recepty');
  }

  addMedicine() {
    this.dialog.open(AddMedicineDialogComponent, { width: '400px' } ).afterClosed().subscribe();
  }

}
