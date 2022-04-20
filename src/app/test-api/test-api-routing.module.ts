import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestAPIComponent } from './test-api.component';

const routes: Routes = [{ path: '', component: TestAPIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class testApiRoutingModule { }
