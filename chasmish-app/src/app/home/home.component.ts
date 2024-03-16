import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import pagesData from '../../assets/json/chasmish.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
pages = pagesData;

}
