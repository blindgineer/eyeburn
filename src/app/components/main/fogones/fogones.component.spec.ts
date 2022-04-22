/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FogonesComponent } from './fogones.component';

describe('FogonesComponent', () => {
  let component: FogonesComponent;
  let fixture: ComponentFixture<FogonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FogonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FogonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
