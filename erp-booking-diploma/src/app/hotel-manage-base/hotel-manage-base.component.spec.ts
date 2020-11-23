import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManageBaseComponent } from './hotel-manage-base.component';

describe('HotelManageBaseComponent', () => {
  let component: HotelManageBaseComponent;
  let fixture: ComponentFixture<HotelManageBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelManageBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
