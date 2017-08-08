import { Injectable } from '@angular/core';
import {SomeDataSource} from './some.datasource'
import { Observable } from 'rxjs/Rx'
import { SomeDataEntity } from '../../entity/some.data.entity'

@Injectable()
export class SomeRepositoryService implements SomeDataSource {

  getSomeData(inputParam : string): Observable<SomeDataEntity> {
    return Observable.create( obs => {
      let someDataEntity = new SomeDataEntity(inputParam)
      obs.next(someDataEntity)
      obs.complete()
    })
  }
}
