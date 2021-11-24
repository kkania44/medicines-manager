import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-medicine-dialog',
  templateUrl: './add-medicine-dialog.component.html',
  styleUrls: ['./add-medicine-dialog.component.css']
})
export class AddMedicineDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      medicine: [],
      startDate: [],
      endDate: [],
      inteval: []
    });
  }

}
