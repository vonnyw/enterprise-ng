import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import {
  SohoRadarComponent
} from 'ids-enterprise-ng';
import {SohoColumnComponent} from '../../soho/column';

@Component({
  selector: 'soho-column-demo',
  templateUrl: './column.demo.html',
})
export class ColumnDemoComponent implements OnInit {

  @ViewChild(SohoColumnComponent) sohoColumnComponent: SohoColumnComponent;

  private selection: SohoColumnSelected  = {fieldName: 'name', fieldValue: 'Equipment'};
  public columnData = [{
    data: [{
      name: 'Automotive',
      shortName: 'Auto',
      abbrName: 'A',
      value: 7,
      tooltip: 'Custom Tooltip - {{value}}'
    }, {
      name: 'Distribution',
      shortName: 'Dist',
      abbrName: 'D',
      value: 10
    }, {
      name: 'Equipment',
      shortName: 'Equip',
      abbrName: 'E',
      value: 14
    }, {
      name: 'Fashion',
      shortName: 'Fash',
      abbrName: 'F',
      value: 10
    }, {
      name: 'Food',
      shortName: 'Food',
      abbrName: 'F',
      value: 14
    }, {
      name: 'Healthcare',
      shortName: 'Health',
      abbrName: 'H',
      value: 8
    }, {
      name: 'Other',
      shortName: 'Other',
      abbrName: 'O',
      value: 7
    }]
  }];

  public columnType = 'column';

  constructor() {}
  ngOnInit() {}

  setChartSelection() {
    const SohoColumnSelected: SohoColumnSelected = this.selection;
    this.sohoColumnComponent.setSelected(SohoColumnSelected);
  }

  toggleChartSelection () {
    const SohoColumnSelected: SohoColumnSelected = this.selection;
    this.sohoColumnComponent.toggleSelected(SohoColumnSelected);
  }
}
