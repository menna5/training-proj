import { Routes } from '@angular/router';
import { BuiltInComponent } from './Directives/Built-it Directives/built-in/built-in.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { SignalsComponent } from './Signals/signals/signals.component';

export const routes: Routes = [
  { path: 'directives', component: BuiltInComponent, title: 'Directives' },
  { path: 'pipes', component: PipesComponent, title: 'Pipes' },
  { path: 'signals', component: SignalsComponent, title: 'Signals' },
];
