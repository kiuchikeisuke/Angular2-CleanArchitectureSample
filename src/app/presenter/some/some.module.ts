import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './some.component'
import { SomePresenterService } from './some-presenter.service'
import { GetSomeDataService } from '../../domain/some/get-some-data.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SomeComponent
  ],
  exports: [
    SomeComponent,
  ],
  providers: [
    {provide: 'SomeContractPresenter' ,useClass: SomePresenterService},
    GetSomeDataService
    /* add use domain */
  ]
})
export class SomeModule { }
