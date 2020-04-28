import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SwitchLanguageService } from '../service/switch-language.service';
import { TranslateService } from '@ngx-translate/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('dynamic', {read: ViewContainerRef, static: false}) container: ViewContainerRef;

  constructor(public translate: TranslateService,
              private langService: SwitchLanguageService,
              private resolver: ComponentFactoryResolver) {
              }

  ngOnInit() {
  }

  loadDynamic() {
    const factory = this.resolver.resolveComponentFactory(DynamicComponent);
    const compRef = this.container.createComponent(factory);
    // console.log('Reference -- ', compRef);
    // compRef.instance.title = 'Saurabh Jain';
  }

}
