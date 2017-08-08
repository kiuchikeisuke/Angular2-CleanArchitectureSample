import { Observable } from 'rxjs/Rx'
import { SomeDataEntity } from '../../entity/some.data.entity'

export abstract class SomeDataSource {
  abstract getSomeData(inputParam : string): Observable<SomeDataEntity>
}
