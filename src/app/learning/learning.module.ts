import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { JavascriptComponent } from './javascript/javascript.component';
import { LangTranslateModule } from '../lang-translate/lang-translate.module';


@NgModule({
  declarations: [JavascriptComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    LangTranslateModule
  ]
})
export class LearningModule { }
