import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-drug-dialog',
  templateUrl: './add-drug-dialog.component.html',
  styleUrls: ['./add-drug-dialog.component.css']
})
export class AddDrugDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [],
      dose: [],
      type: [],
      manufacturer: []
    });
  }

}
