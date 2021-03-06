import { EditPrescriptionDialogComponent } from './edit-prescription-dialog/edit-prescription-dialog.component';
import { AddPrescriptionDialogComponent } from './add-prescription-dialog/add-prescription-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Prescription } from './prescription';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  prescritpions: Prescription[] = [
    { code: '12214', status: 'w trakcie realizacji', description: 'Description of prescription 1' },
    { code: '46523', status: 'w trakcie realizacji', description: 'Description of prescription 22' },
    { code: '21421', status: 'zrealizowana', description: 'Description of prescription 142' },
    { code: '64573', status: 'niezrelizowana', description: 'Description of prescription 32' },
    { code: '03352', status: 'zrealizowana', description: 'Description of prescription 4' },
  ];
  displayedColumns = ['code', 'description', 'status', 'edit', 'delete' ];

  constructor(
    private router: Router,
    private dialog: MatDialog) {
   }

  ngOnInit(): void {
  }

  goToMedicines() {
    this.router.navigateByUrl('lekarstwa');
  }

  goToPrescriptions() {
    this.router.navigateByUrl('recepty');
  }

  goToMedicineBase()  {
    this.router.navigateByUrl('bazaLekow')
  }

  edit(prescription: Prescription) {
    this.dialog.open(EditPrescriptionDialogComponent, { data: prescription,  width: '400px' })
      .afterClosed()
      .subscribe();
  }

  addPrescription() {
    this.dialog.open(AddPrescriptionDialogComponent, { disableClose: true, width: '400px'} )
      .afterClosed()
      .subscribe();
  }

  deletePrescription(prescription: Prescription) {
    if(confirm("Are you sure to delete "+ prescription.code)) {
      console.log("Implement delete functionality here");
    }
  }

}
