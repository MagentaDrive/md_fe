import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { testApiRoutingModule } from './test-api-routing.module';
import { TestAPIComponent } from './test-api.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TestAPIComponent],
  imports: [
    CommonModule,
    testApiRoutingModule
  ]
})
export class TestApiModule { }
