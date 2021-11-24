import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-prescription-dialog',
  templateUrl: './add-prescription-dialog.component.html',
  styleUrls: ['./add-prescription-dialog.component.css']
})
export class AddPrescriptionDialogComponent implements OnInit {
  form: FormGroup;
  statuses = [ 'w trakcie realizacji', 'niezrealizowana', 'zrealizowana'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      code: [],
      description: [],
      status: []
    });
  }

}
