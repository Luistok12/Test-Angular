import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4Component } from './ejemplo4.component';

describe('Ejemplo4Component', () => {
  let component: Ejemplo4Component;
  let fixture: ComponentFixture<Ejemplo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejemplo4Component]
    });
    fixture = TestBed.createComponent(Ejemplo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
