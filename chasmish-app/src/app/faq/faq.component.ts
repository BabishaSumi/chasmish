import { Component } from '@angular/core';
import 'reflect-metadata';
import { Type } from 'class-transformer';
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
  faqs: faq[] = [];
  ngOnInit(): void {
    this.faqs = plainToInstance(faq, this.faqJson as []);
  }

}
export class faq {
  public q: string;
  public a: string;
  constructor(q: string, a: string) {
    this.q = q;
    this.a = a;
  }
}