export interface HeirarchyEnum {
  id: number;
  hasParent: boolean;
  hasChildren: boolean;


}

export namespace HierarchyType {


  export class BOAT implements HeirarchyEnum {
    readonly id: 0;
    readonly hasParent: false;
    readonly hasChildren: true;
  }

  export class LAWYER implements HeirarchyEnum {
    readonly id: 1;
    readonly hasParent: true;
    readonly hasChildren: true
  }

  export class LECTURE implements HeirarchyEnum  {
    readonly id: 2;
    readonly hasParent: true;
    readonly hasChildren: false;
  }
}
