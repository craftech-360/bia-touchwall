import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridThreeComponent } from './grid-three.component';

describe('GridThreeComponent', () => {
  let component: GridThreeComponent;
  let fixture: ComponentFixture<GridThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
