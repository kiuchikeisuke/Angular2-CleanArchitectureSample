import { SomeDataEntity } from '../../data/entity/some.data.entity'

export abstract class SomeContractPresenter {
  abstract load(inputParam:string, callback:(entity:SomeDataEntity)=>void)
}
