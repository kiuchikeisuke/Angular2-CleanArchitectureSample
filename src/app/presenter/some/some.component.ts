import { Component, OnInit, Inject } from '@angular/core';
import { SomePresenterService } from './some-presenter.service'
import { SomeContractPresenter } from './some-contract'
import { SomeDataEntity } from '../../data/entity/some.data.entity'


@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  someValue:string
  constructor(@Inject('SomeContractPresenter') private presenter:SomeContractPresenter) {
    this.someValue = 'moge'
  }

  ngOnInit() {
    this.presenter.load('1111', entity => {
      this.someValue = entity.id
      console.log(entity.id)
    })
  }
}
