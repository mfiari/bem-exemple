import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BemItemComponent } from './bem-item.component';

describe('BemListComponent', () => {
  let component: BemItemComponent;
  let fixture: ComponentFixture<BemItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BemItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
