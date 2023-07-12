import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorConfigurableExampleComponent } from './paginator-configurable-example.component';

describe('PaginatorConfigurableExampleComponent', () => {
  let component: PaginatorConfigurableExampleComponent;
  let fixture: ComponentFixture<PaginatorConfigurableExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorConfigurableExampleComponent]
    });
    fixture = TestBed.createComponent(PaginatorConfigurableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
