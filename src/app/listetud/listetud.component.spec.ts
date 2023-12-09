import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetudComponent } from './listetud.component';

describe('ListetudComponent', () => {
  let component: ListetudComponent;
  let fixture: ComponentFixture<ListetudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListetudComponent]
    });
    fixture = TestBed.createComponent(ListetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
