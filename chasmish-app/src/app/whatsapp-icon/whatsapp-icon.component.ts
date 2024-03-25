import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './whatsapp-icon.component.html',
  styleUrl: './whatsapp-icon.component.css'
})
export class WhatsappIconComponent {
  faWhatsapp=faWhatsapp;
}
