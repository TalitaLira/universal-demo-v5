import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteMetaComponent } from './teste-meta.component';

describe('TesteMetaComponent', () => {
  let component: TesteMetaComponent;
  let fixture: ComponentFixture<TesteMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
