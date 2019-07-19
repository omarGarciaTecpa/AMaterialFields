import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingButtonExampleComponent } from './loading-button-example.component';

describe('LoadingButtonExampleComponent', () => {
  let component: LoadingButtonExampleComponent;
  let fixture: ComponentFixture<LoadingButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingButtonExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
