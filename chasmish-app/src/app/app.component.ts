import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappIconComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
}
