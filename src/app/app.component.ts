import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwitchLanguageService } from './service/switch-language.service';
import { Router, NavigationEnd } from '@angular/router';
import { compileNgModule } from '@angular/compiler';
import { environment } from './../environments/environment';

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
        // console.log('Nav End 1 -- ', this.router.url);
        const lang = this.router.url.indexOf('/de/') > -1 ? 'de' : 'en';
        translate.use(lang);
      }
    });
    // this.languageChanged();
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
