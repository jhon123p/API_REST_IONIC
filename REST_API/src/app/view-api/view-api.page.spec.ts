import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewApiPage } from './view-api.page';

describe('ViewApiPage', () => {
  let component: ViewApiPage;
  let fixture: ComponentFixture<ViewApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
