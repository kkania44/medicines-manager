import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from './drug'
import { MatDialog } from '@angular/material/dialog';
import { EditDrugDialogComponent } from './edit-drug-dialog/edit-drug-dialog.component';
import { AddDrugDialogComponent } from './add-drug-dialog/add-drug-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medicines-database',
  templateUrl: './medicines-database.component.html',
  styleUrls: ['./medicines-database.component.css']
})
export class MedicinesDatabaseComponent implements OnInit {
  drugs: Drug[] = [
    {id: 1, name: 'Nazwa', dose: 200, manufacturer: 'Pfizer', type: 'tabletka'},
    {id: 2, name: 'Nazwa2', dose: 300, manufacturer: 'Pfizer', type: 'tabletka'}
  ];
  displayedColumns = [ 'name', 'dose', 'type', 'manufacturer', 'edit', 'delete'];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  goToMedicines() {
    this.router.navigateByUrl('lekarstwa');
  }

  goToPrescriptions() {
    this.router.navigateByUrl('recepty');
  }

  goToMedicinesDatabase(){
    this.router.navigateByUrl('wszystkieLekarstwa');
  }

  private getAll() {
    this.http.get<Drug[]>('http://localhost:8100/medicine').subscribe(data => this.drugs = data);
  }

  edit(drug: Drug) {
    this.dialog.open(EditDrugDialogComponent, { data: drug, width: '400px' }).afterClosed()
      .subscribe(() => location.reload());
  }

  addMedicine() {
    this.dialog.open(AddDrugDialogComponent, { width: '400px' } ).afterClosed()
      .subscribe(() => location.reload());
  }

  deleteMedicine(drug: Drug) {
    this.dialog.open(DeleteDialogComponent, { data: 'lek' }).afterClosed().subscribe(() => location.reload());
    // if(confirm("Are you sure to delete "+ drug.name)) {
    //   console.log("Implement delete functionality here");
    // }
  }

}
