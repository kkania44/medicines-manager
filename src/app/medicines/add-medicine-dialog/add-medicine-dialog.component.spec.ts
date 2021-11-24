import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineDialogComponent } from './add-medicine-dialog.component';

describe('AddMedicineDialogComponent', () => {
  let component: AddMedicineDialogComponent;
  let fixture: ComponentFixture<AddMedicineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
