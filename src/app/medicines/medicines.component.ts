import { EditMedicineDialogComponent } from './edit-medicine-dialog/edit-medicine-dialog.component';
import { AddMedicineDialogComponent } from './add-medicine-dialog/add-medicine-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Medicine, MedicineDose } from './medicine';
import { config } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {
  doses: Medicine[] = [
    { name: 'Lek 1', startDate: new Date(), endDate: new Date(2021, 12, 4), interval: 4 },
    { name: 'Lek 2', startDate: new Date(), endDate: new Date(2021, 12, 12), interval: 6 },
    { name: 'Lek 3', startDate: new Date(), endDate: new Date(2021, 12, 2), interval: 12 },
    { name: 'Lek 1', startDate: new Date(), endDate: new Date(2021, 12, 4), interval: 4 },
    { name: 'Lek 2', startDate: new Date(), endDate: new Date(2021, 12, 12), interval: 6 },
    { name: 'Lek 3', startDate: new Date(), endDate: new Date(2021, 12, 2), interval: 12 }
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

  goToMedicinesDatabase(){
    this.router.navigateByUrl('wszystkieLekarstwa')
  }

  edit(dose: Medicine) {
    this.dialog.open(EditMedicineDialogComponent, { data: dose, width: '400px' }).afterClosed().subscribe();
  }

  addMedicine() {
    this.dialog.open(AddMedicineDialogComponent, { width: '400px' } ).afterClosed().subscribe();
  }

}
