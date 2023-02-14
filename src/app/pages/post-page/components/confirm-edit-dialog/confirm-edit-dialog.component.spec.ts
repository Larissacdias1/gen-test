import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEditDialog } from './confirm-edit-dialog.component';

describe('EditDialogComponent', () => {
  let component: ConfirmEditDialog;
  let fixture: ComponentFixture<ConfirmEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmEditDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEditDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
