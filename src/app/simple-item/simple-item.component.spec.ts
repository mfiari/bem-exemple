import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleItemComponent } from './simple-item.component';

describe('SimpleListComponent', () => {
  let component: SimpleItemComponent;
  let fixture: ComponentFixture<SimpleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
