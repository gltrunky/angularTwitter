import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwAddComponent } from './tw-add.component';

describe('TwAddComponent', () => {
  let component: TwAddComponent;
  let fixture: ComponentFixture<TwAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
