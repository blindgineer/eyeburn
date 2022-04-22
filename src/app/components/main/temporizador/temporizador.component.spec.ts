/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemporizadorComponent } from './temporizador.component';

describe('TemporizadorComponent', () => {
  let component: TemporizadorComponent;
  let fixture: ComponentFixture<TemporizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
