import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleMessageComponent } from './people-message.component';

describe('PeopleMessageComponent', () => {
  let component: PeopleMessageComponent;
  let fixture: ComponentFixture<PeopleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
