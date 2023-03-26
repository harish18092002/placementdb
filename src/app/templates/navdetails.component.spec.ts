import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdetailsComponent } from './navdetails.component';

describe('NavdetailsComponent', () => {
  let component: NavdetailsComponent;
  let fixture: ComponentFixture<NavdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
