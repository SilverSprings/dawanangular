import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {registerLocaleData} from '@angular/common';
// pas besoin pour En, car anglais par défaut
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';
import localeVi from '@angular/common/locales/vi';
import localeAr from '@angular/common/locales/ar';

registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeJa);
registerLocaleData(localeVi);
registerLocaleData(localeAr);

import { AppComponent } from './components/base/app.component';
import { PlanComponent } from './components/plan/plan.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { RouteComponent } from './components/route/route.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { PowerPipe } from './pipe/power/power.pipe';
import { PipelindromePipe } from './pipe/pipelindrome/pipelindrome.pipe';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './directive/highlight/highlight.directive';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SignupComponent } from './components/signup/signup.component';
import { ServiceComponent } from './components/service/service.component';
import { PromobseComponent } from './components/promobse/promobse.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { AuthenComponent } from './components/authen/authen.component';
import { HttpComponent } from './components/http/http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PresentationComponent,
    TodolistComponent,
    RouteComponent,
    NotFoundComponent,
    PipeComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomPipeComponent,
    PowerPipe,
    PipelindromePipe,
    CustomDirectiveComponent,
    HighlightDirective,
    FormulaireComponent,
    SignupComponent,
    ServiceComponent,
    PromobseComponent,
    ParametersComponent,
    AuthenComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr'}, /* Permet de définir la valeur de LOCALE_ID,
                                             qui est utilisé par les pipes pour savoir dans quel pays */
    { provide: 'SecureRouteGuard', useValue: () => { return true; }}
  ],
  bootstrap: [RouteComponent]
})
export class AppModule { }
