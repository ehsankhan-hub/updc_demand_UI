import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedemandComponent } from './createdemand.component';

describe('CreatedemandComponent', () => {
  let component: CreatedemandComponent;
  let fixture: ComponentFixture<CreatedemandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedemandComponent]
    });
    fixture = TestBed.createComponent(CreatedemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
