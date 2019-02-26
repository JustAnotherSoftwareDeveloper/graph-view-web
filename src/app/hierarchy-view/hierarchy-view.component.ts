import { Component, OnInit } from '@angular/core';
import { HierachyEntity } from '../model/hierachy-entity';
import { HierarchyService } from '../service/hierarchy.service';
import { Subject } from 'rxjs';
import { HeirarchyEnum, HierarchyType } from '../model/hierarchy-type';

@Component({
  selector: 'tst-hierarchy-view',
  templateUrl: './hierarchy-view.component.html',
  styleUrls: ['./hierarchy-view.component.scss']
})
export class HierarchyViewComponent implements OnInit {

  public selectedHierarchy : HierachyEntity = null;
  private hierarchyChange = new Subject<HierachyEntity>();

  public treePath : Identifier[] = []
  constructor(private hierarchyService: HierarchyService) { }

  ngOnInit() {

    this.hierarchyChange.subscribe(hierarchy => {
      this.onHierarchyChange(hierarchy);
    })
    this.hierarchyService.getHeirarchy(7).subscribe(hierarchy => this.hierarchyChange.next(hierarchy))
  }

  private onHierarchyChange(hierarchy: HierachyEntity) {
    this.selectedHierarchy = hierarchy;
    this.treePath = []
    let hierarchyIterable = this.selectedHierarchy;
    while(hierarchyIterable) {
      this.treePath.unshift({name: hierarchyIterable.name, id: hierarchyIterable.id, type: hierarchyIterable.hierarchyType});
      hierarchyIterable = hierarchyIterable.parent;
    }
  }

  public selectHierarchy(hierarchy: HierachyEntity) {
    this.hierarchyChange.next(hierarchy);
  }

  public determineIcon(type: HeirarchyEnum) : string {
    const id = type.id
    console.log(type.id)
    if (id=== HierarchyType.BOAT().id) {
      return 'mdi-ferry'
    }
    if (id === HierarchyType.LAWYER().id) {
      return 'mdi-script'
    }
    if (id === HierarchyType.LECTURE().id) {
      return 'mdi-google-classroom'
    }
    return 'mdi-account'
  }
  public traverse(id: number) {
    let hierarchy = this.selectedHierarchy;
    while (hierarchy.id !== id) {
      hierarchy = hierarchy.parent;
    }
    if (hierarchy == null) {
      throw Error('Cannot Find Link')
    }
    else if (hierarchy !== this.selectedHierarchy) {
      this.hierarchyChange.next(hierarchy);
    }
  }

  public childTooltip(child: HierachyEntity) {
    return `${child.name} - ${child.hierarchyType.displayName}`
  }

}

interface Identifier {
  name: string;
  id: number;

  type: HeirarchyEnum;
}
