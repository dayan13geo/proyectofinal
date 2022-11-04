import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCartComponent } from './gallery-cart.component';

describe('GalleryCartComponent', () => {
  let component: GalleryCartComponent;
  let fixture: ComponentFixture<GalleryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
