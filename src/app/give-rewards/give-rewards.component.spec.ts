import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveRewardsComponent } from './give-rewards.component';

describe('GiveRewardsComponent', () => {
  let component: GiveRewardsComponent;
  let fixture: ComponentFixture<GiveRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
