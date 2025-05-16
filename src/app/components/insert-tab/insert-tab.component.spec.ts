import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTabComponent } from './insert-tab.component';

describe('InsertTabComponent', () => {
  let component: InsertTabComponent;
  let fixture: ComponentFixture<InsertTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
