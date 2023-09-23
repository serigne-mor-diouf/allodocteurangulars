import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderallodocteurComponent } from './headerallodocteur.component';

describe('HeaderallodocteurComponent', () => {
  let component: HeaderallodocteurComponent;
  let fixture: ComponentFixture<HeaderallodocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderallodocteurComponent]
    });
    fixture = TestBed.createComponent(HeaderallodocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
