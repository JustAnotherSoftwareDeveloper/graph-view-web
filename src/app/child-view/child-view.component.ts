import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HierachyEntity } from '../model/hierachy-entity';

@Component({
  selector: 'tst-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit {

  @Input() child: HierachyEntity;

  @Input() icon: string;

  @Output() selected = new EventEmitter<HierachyEntity>();
  constructor() { }

  ngOnInit() {
  }

  selectHierarchy() {
    this.selected.emit(this.child);
  }

}
