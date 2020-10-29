import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsIndexComponent } from './auctions-index.component';

describe('AuctionsIndexComponent', () => {
  let component: AuctionsIndexComponent;
  let fixture: ComponentFixture<AuctionsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
