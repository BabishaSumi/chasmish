import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faYoutube, faBlogger, faAmazon } from '@fortawesome/free-brands-svg-icons';
// import { ClassTransformer, plainToClass, plainToClassFromExist } from 'class-transformer';
import { plainToInstance } from 'class-transformer';
import 'reflect-metadata';
import pagesData from '../../assets/json/chasmish.json';
import { Page, Link } from './pages.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  pagesJson: any = pagesData;
  pages: Page[] = [];
  swiggy = "swiggy";
  ngOnInit(): void {
    this.pages = plainToInstance(Page, this.pagesJson as []);
    this.pages.forEach(
      p => p.links.forEach(
        l => {
          l.fixIcons();
        }));
  }

}