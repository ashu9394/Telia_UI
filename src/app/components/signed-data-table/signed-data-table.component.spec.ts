import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedDataTableComponent } from './signed-data-table.component';

describe('SignedDataTableComponent', () => {
  let component: SignedDataTableComponent;
  let fixture: ComponentFixture<SignedDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
