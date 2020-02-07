import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocGenComponent } from './doc-gen.component';

describe('DocGenComponent', () => {
  let component: DocGenComponent;
  let fixture: ComponentFixture<DocGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
