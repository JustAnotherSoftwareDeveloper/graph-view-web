export interface HeirarchyEnum {
  id: number;
  hasParent: boolean;
  hasChildren: boolean;


}

export namespace HierarchyType {


  export class BOAT implements HeirarchyEnum {
    public readonly id: 0;
    public readonly hasParent: false;
    public readonly hasChildren: true;
  }

  export class LAWYER implements HeirarchyEnum {
    public readonly id: 1;
    public readonly hasParent: true;
    public readonly hasChildren: true
  }

  export class LECTURE implements HeirarchyEnum  {
    public readonly id: 2;
    public readonly hasParent: true;
    public readonly hasChildren: false;
  }
}
