import { Component } from '@angular/core';
import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import faqData from '../../assets/json/faq.json';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  faqJson: any = faqData;
  faqs: Faq[] = [];
  ngOnInit(): void {
    this.faqs = plainToInstance(Faq, this.faqJson as []);
  }

}
export class Faq {
  public q: string;
  public a: string;
  constructor(q: string, a: string) {
    this.q = q;
    this.a = a;
  }
}