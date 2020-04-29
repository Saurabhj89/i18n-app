import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwitchLanguageService } from './service/switch-language.service';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';
import { compileNgModule } from '@angular/compiler';
import { environment } from './../environments/environment';
import { filter, pairwise } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public browserLang = 'en';

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  envName = environment.name;
  currentUrl$ = new BehaviorSubject<Array<string>>(new Array<string>());
  urlArr = new Array<string>();
  // history;

  constructor(public translate: TranslateService,
              private router: Router) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('en');
    // this.langService.selectedLanguage.subscribe((val) => {
    //   translate.use(val);
    // });
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
         // console.log('Nav End -- ', e.url);
         this.urlArr.push(this.router.url);
         this.urlArr = [...this.urlArr];
         this.currentUrl$.next(this.urlArr);
         // console.log('Nav End 1 -- ', this.router.url);
        const lang = this.router.url.indexOf('/de/') > -1 ? 'de' : 'en';
        translate.use(lang);
      }
      
    });
    // this.languageChanged();
    // this.currentUrl$.subscribe(val => this.history = val);
  }
  title = 'i18n-app';

  arr = [2, 3, 4, 5, 1];
  cnt = 0;

  languageChanged(lang) {
    // this.langService.saveLanguage(lang);
    this.translate.use(lang.match(/de|en/) ? lang : 'en');
  }

  selectedLanguage(lang: string) {
    console.log('selected Language -- ', lang);
    // this.browserLang = lang;
    this.router.navigate([lang, 'home']);
    this.languageChanged(lang);
  }

  updateArray() {
    console.log('helo --');
    this.arr.push(this.cnt--);
    console.log('updated arr - ', this.arr);
  }

}
