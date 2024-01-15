import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, AddChallengeComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
