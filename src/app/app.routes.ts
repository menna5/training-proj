import { ResolveFn, Routes } from '@angular/router';
import { BuiltInComponent } from './Directives/Built-it Directives/built-in/built-in.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { SignalsComponent } from './Signals/signals/signals.component';

const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];
export const routes: Routes = [
  {
    path: 'directives',
    loadComponent: () =>
      import(
        '../app/Directives/Built-it Directives/built-in/built-in.component'
      ).then((m) => m.BuiltInComponent),
    title: 'Directives',
    pathMatch: 'full',
  },
  {
    path: 'pipes',
    component: PipesComponent,
    title: 'Pipes',
    outlet: 'sideBar',
  },
  {
    path: 'signals',
    component: SignalsComponent,
    pathMatch: 'prefix',
    title: titleResolver,
  },
  { path: '**', redirectTo: 'signals' },
];
