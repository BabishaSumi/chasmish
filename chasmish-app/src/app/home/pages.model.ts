import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram, faYoutube, faBlogger, faAmazon
  , faSpotify,
  faWhatsapp,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { faShop, faBug, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'reflect-metadata';
import { Type } from 'class-transformer';
export class Link {
  id: number; url: string; type: string;
  linkIcon: IconDefinition;
  constructor(id: number, url: string, type: string) {
    this.id = id;
    this.url = url;
    this.type = type;

    switch (this.type) {
      case "instagram": this.linkIcon = faInstagram; break;
      case "amazon": this.linkIcon = faAmazon; break;
      case "youtube": this.linkIcon = faYoutube; break;
      case "spotify": this.linkIcon = faSpotify; break;
      case "blogger": this.linkIcon = faBlogger; break;
      default: this.linkIcon = faBug; break;
    }

    console.log(this.type);
    console.log(this.linkIcon);
  }
  fixIcons() {
    switch (this.type) {
      case "instagram": this.linkIcon = faInstagram; break;
      case "amazon": this.linkIcon = faAmazon; break;
      case "youtube": this.linkIcon = faYoutube; break;
      case "whatsapp": this.linkIcon = faWhatsapp; break;
      case "pinterest": this.linkIcon = faPinterest; break;
      case "email": this.linkIcon = faEnvelope; break;
      case "swiggy": this.linkIcon = faShop; break; //TODO: Update this
      case "spotify": this.linkIcon = faSpotify; break;
      case "blogger": this.linkIcon = faBlogger; break;
      default: this.linkIcon = faBug; break;
    }

  }
}
export class Page {
  sNo: number; photo: string; page: string; tagLine: string;
  @Type(() => Link)
  links: Link[];
  constructor(sNo: number, photo: string, page: string, tagLine: string, links: Link[]) {
    this.sNo = sNo;
    this.photo = photo;
    this.page = page;
    this.tagLine = tagLine;
    this.links = links;
  }
}