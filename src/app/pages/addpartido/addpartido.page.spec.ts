import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpartidoPage } from './addpartido.page';

describe('AddpartidoPage', () => {
  let component: AddpartidoPage;
  let fixture: ComponentFixture<AddpartidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddpartidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
