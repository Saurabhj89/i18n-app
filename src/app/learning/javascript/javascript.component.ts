import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

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

  ngOnInit() {
  }

}
