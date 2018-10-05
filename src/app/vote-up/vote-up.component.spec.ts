import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteUpComponent } from './vote-up.component';

describe('VoteUpComponent', () => {
  let component: VoteUpComponent;
  let fixture: ComponentFixture<VoteUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
