import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarDebitoComponent } from './adicionar-debito.component';

describe('AdicionarDebitoComponent', () => {
  let component: AdicionarDebitoComponent;
  let fixture: ComponentFixture<AdicionarDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarDebitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});