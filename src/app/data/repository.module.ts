import { NgModule } from '@angular/core';
import {SomeDataSource} from './data-source/some/some.datasource'
import {SomeRepositoryService} from './data-source/some/some-repository.service'

@NgModule({
providers:[
  {provide: 'SomeDataSource' ,useClass: SomeRepositoryService}
  /* add dataSource and RepositoryService */
]})
export class RepositoryModule{}
