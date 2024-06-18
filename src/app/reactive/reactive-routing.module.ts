import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { DynamicPagesComponent } from './pages/dynamic-pages/dynamic-pages.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicPagesComponent},
      { path: 'dynamic', component: DynamicPagesComponent},
      { path: 'switches', component: SwitchesPagesComponent},
      { path: '**', redirectTo: 'basic'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
