import {Component, OnInit} from '@angular/core';
import {SystemService} from '../api/system/system.service';
import {HistorianRecord} from '../api/system/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: HistorianRecord[] = [];

  constructor(private systemService: SystemService) {
  }

  ngOnInit() {
    this.systemService.getHistory()
      .subscribe(_ => this.history = _);
  }

  isSystemTx(tx: HistorianRecord): boolean {
    return tx.transactionType.startsWith('org.hyperledger');
  }
}
