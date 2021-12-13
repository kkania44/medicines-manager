import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from './drug'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-medicines-database',
  templateUrl: './medicines-database.component.html',
  styleUrls: ['./medicines-database.component.css']
})
export class MedicinesDatabaseComponent implements OnInit {
  drugs: Drug[] = [
    {id: 1, name: 'Nazwa', dose: 200, manufacturer: 'Pfizer', type: 'tabletka'},
    {id:2, name: 'Nazwa2', dose: 300, manufacturer: 'Pfizer', type: 'tabletka'}
  ];
  displayedColumns = [ 'name', 'dose', 'type', 'manufacturer', 'edit', 'delete'];

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

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

}}
