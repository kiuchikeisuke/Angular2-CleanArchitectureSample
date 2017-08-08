import { Injectable,Inject } from '@angular/core';
import { SomeDataSource } from '../../data/data-source/some/some.datasource'
import { Observable } from 'rxjs/Rx'
import { SomeDataEntity } from '../../data/entity/some.data.entity'
import { RequestValue, ResponseValue, UseCase} from '../../utils/commons/usecase'

@Injectable()
export class GetSomeDataService<Q extends GetSomeDataReq, R extends GetSomeDataRes> extends UseCase<Q ,R > {

  public execute(req:GetSomeDataReq):Observable<GetSomeDataRes> {
    return this.somedatasource.getSomeData(req.imputParam).map(entity => new GetSomeDataRes(entity))
  }

  constructor(@Inject('SomeDataSource') private somedatasource:SomeDataSource) {
    super()
  }
}

export class GetSomeDataReq implements RequestValue {
  constructor(public imputParam:string){}
}

export class GetSomeDataRes implements ResponseValue {
  constructor(public entity:SomeDataEntity){}
}
