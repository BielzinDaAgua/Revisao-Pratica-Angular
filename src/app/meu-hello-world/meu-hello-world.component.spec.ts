import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuHelloWorldComponent } from './meu-hello-world.component';

describe('MeuHelloWorldComponent', () => {
  let component: MeuHelloWorldComponent;
  let fixture: ComponentFixture<MeuHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuHelloWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
