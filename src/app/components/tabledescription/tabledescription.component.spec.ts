import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledescriptionComponent } from './tabledescription.component';

describe('TabledescriptionComponent', () => {
  let component: TabledescriptionComponent;
  let fixture: ComponentFixture<TabledescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabledescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabledescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
