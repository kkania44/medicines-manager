import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { AddMedicineDialogComponent } from './medicines/add-medicine-dialog/add-medicine-dialog.component';
import { AddPrescriptionDialogComponent } from './prescriptions/add-prescription-dialog/add-prescription-dialog.component';
import { EditMedicineDialogComponent } from './medicines/edit-medicine-dialog/edit-medicine-dialog.component';
import { EditPrescriptionDialogComponent } from './prescriptions/edit-prescription-dialog/edit-prescription-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    LoginComponent,
    RegistrationComponent,
    PrescriptionsComponent,
    AddMedicineDialogComponent,
    AddPrescriptionDialogComponent,
    EditMedicineDialogComponent,
    EditPrescriptionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
