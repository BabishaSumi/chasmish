import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import faqData from '../../assets/json/faq.json';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQGroup {
  group: string;
  faqItems: FAQItem[];
  active?: boolean;
}
@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css'],
    imports: [
        CommonModule
    ]
})
export class FAQComponent implements OnInit {
  faqGroups: FAQGroup[] = [];

  ngOnInit(): void {
    this.faqGroups = faqData.map((group: any) => ({
      group: group.group,
      faqItems: group.faqItems.map((item: any) => ({
        q: item.q,
        a: item.a
      })),
      active: false
    }));
    this.faqGroups[0].active = true;
    console.log(this.faqGroups);
    console.log(this.faqGroups[0].active);
  }

  toggleAccordion(group: FAQGroup): void {
    group.active = !group.active;
  }
}