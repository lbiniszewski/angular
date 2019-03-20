import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowyFilmComponent } from './nowy-film.component';

describe('NowyFilmComponent', () => {
  let component: NowyFilmComponent;
  let fixture: ComponentFixture<NowyFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowyFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowyFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
