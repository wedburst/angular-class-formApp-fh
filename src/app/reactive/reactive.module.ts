import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { DynamicPagesComponent } from './pages/dynamic-pages/dynamic-pages.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';

@NgModule({
  declarations: [
    BasicPagesComponent,
    DynamicPagesComponent,
    SwitchesPagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ReactiveModule {}
