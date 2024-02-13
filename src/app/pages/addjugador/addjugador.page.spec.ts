import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddjugadorPage } from './addjugador.page';

describe('AddjugadorPage', () => {
  let component: AddjugadorPage;
  let fixture: ComponentFixture<AddjugadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddjugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
