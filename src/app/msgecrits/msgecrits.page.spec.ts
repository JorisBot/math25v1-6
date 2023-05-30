import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MsgecritsPage } from './msgecrits.page';

describe('MsgecritsPage', () => {
  let component: MsgecritsPage;
  let fixture: ComponentFixture<MsgecritsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MsgecritsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

