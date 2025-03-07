import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentRoute: string = '';
  currentRouteLabel: string = 'Home';
  isMenuOpen = false;
  routes = [
    { path: '/home', label: 'Home' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About' }
  ];
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.currentRouteLabel = this.routes.find(route => route.path === this.currentRoute && this.currentRoute!=='/home')?.label ?? '';
        this.isMenuOpen = false; // Close the menu when route changes
        console.log(this.currentRoute);
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Check if the click is outside the side menu
    const clickedElement = event.target as HTMLElement;
    const isClickInsideSideMenu = clickedElement.closest('.side-menu');
    const isClickOnMenuIcon = clickedElement.closest('.menu-icon');
    
    if (!isClickInsideSideMenu && !isClickOnMenuIcon) {
      this.isMenuOpen = false;
    }
  }
  ngOnInit(): void { }
}
