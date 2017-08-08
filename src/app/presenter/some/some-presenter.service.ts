import { Injectable, Inject, Host } from '@angular/core';
import { SomeDataSource } from '../../data/data-source/some/some.datasource'
import { SomeContractPresenter } from './some-contract'
import { SomeDataEntity } from '../../data/entity/some.data.entity'
import { GetSomeDataService, GetSomeDataReq, GetSomeDataRes } from '../../domain/some/get-some-data.service'


@Injectable()
export class SomePresenterService implements SomeContractPresenter {

  load(inputParam:string,callback:(entity:SomeDataEntity)=>void) {
    this.getSomeData.execute(new GetSomeDataReq(inputParam)).subscribe( res => { callback(res.entity)}, err => {console.log(err)})
  }

  constructor(private getSomeData:GetSomeDataService<GetSomeDataReq, GetSomeDataRes>) {}

}
