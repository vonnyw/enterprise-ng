import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {SohoBarComponent} from '../../soho/bar';

@Component({
  selector: 'soho-bar-demo',
  templateUrl: './bar.demo.html',
})
export class BarDemoComponent implements OnInit {

  @ViewChild(SohoBarComponent) sohoBarComponent: SohoBarComponent;

  private selection: SohoBarSelected  = {fieldName: 'name', fieldValue: 'Category B'};
  public barData = [{
    data: [{
      name: 'Category A',
      value: 373,
      url: 'test'
      }, {
        name: 'Category B',
        value: 372
      }, {
        name: 'Category C',
        value: 236.35
    }],
    name: ''
  }];

  public barType = 'bar';
  constructor() {}

  ngOnInit() {}

  setChartSelection() {
    const SohoBarSelected: SohoBarSelected = this.selection;
    this.sohoBarComponent.setSelected(SohoBarSelected);
  }

  toggleChartSelection () {
    const SohoBarSelected: SohoBarSelected = this.selection;
    this.sohoBarComponent.toggleSelected(SohoBarSelected);
  }
}
