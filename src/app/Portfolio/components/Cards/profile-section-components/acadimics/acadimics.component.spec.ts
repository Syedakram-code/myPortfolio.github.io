import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadimicsComponent } from './acadimics.component';

describe('AcadimicsComponent', () => {
  let component: AcadimicsComponent;
  let fixture: ComponentFixture<AcadimicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadimicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadimicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
