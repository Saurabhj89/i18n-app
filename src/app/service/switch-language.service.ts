import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchLanguageService {

  constructor() { }

  selectedLanguage = new BehaviorSubject('en');

  getLanguage() {
    return this.selectedLanguage;
  }

  saveLanguage(lang: string) {
    this.selectedLanguage.next(lang);
  }

}
