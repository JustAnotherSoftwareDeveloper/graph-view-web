import { Component, OnInit, Input } from '@angular/core';
import { Gambler } from '../model/gambler';

@Component({
  selector: 'tst-gambler-view',
  templateUrl: './gambler-view.component.html',
  styleUrls: ['./gambler-view.component.scss']
})
export class GamblerViewComponent implements OnInit {

  @Input() gambler: Gambler
  constructor() { }

  ngOnInit() {
  }

}
