import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './components/base/app.component';
import {PlanComponent} from './components/plan/plan.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {TodolistComponent} from './components/todolist/todolist.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PipeComponent} from './components/pipe/pipe.component';
import {DirectiveComponent} from './components/directive/directive.component';
import {LocaleComponent} from './components/locale/locale.component';
import {CustomPipeComponent} from './components/custom-pipe/custom-pipe.component';
import {CustomDirectiveComponent} from './components/custom-directive/custom-directive.component';
import {FormulaireComponent} from './components/formulaire/formulaire.component';
import {SignupComponent} from './components/signup/signup.component';
import {ServiceComponent} from './components/service/service.component';
import {PromobseComponent} from './components/promobse/promobse.component';
import {ParametersComponent} from './components/parameters/parameters.component';
import {SecureRouteGuard} from './guards/secureRoute/secure-route.guard';
import {HttpComponent} from './components/http/http.component';
import {AuthenComponent} from './components/authen/authen.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'plan', component: PlanComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'todo', component: TodolistComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'locale', component: LocaleComponent},
  { path: 'pipePerso', component: CustomPipeComponent},
  { path: 'directivePerso', component: CustomDirectiveComponent},
  { path: 'formulaire', component: FormulaireComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'promobse', component: PromobseComponent},
  { path: 'parameters', component: ParametersComponent, data: {'value': 'Hello World parameters'}},
  {
    path: 'parameters/:name',
    component: ParametersComponent,
    data: {'value': 'Hello World parameters/:name'},
    canActivate: [SecureRouteGuard]
  },
  { path: 'http', component: HttpComponent},
  { path: 'authen', component: AuthenComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
