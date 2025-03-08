import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappIconComponent } from './whatsapp-icon.component';

describe('WhatsappIconComponent', () => {
  let component: WhatsappIconComponent;
  let fixture: ComponentFixture<WhatsappIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
