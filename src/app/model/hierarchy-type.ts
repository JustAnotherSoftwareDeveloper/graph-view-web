import dcopy from 'deep-copy';

export interface HeirarchyEnum {
  id: number;
  hasParent: boolean;
  hasChildren: boolean;

  displayName: string;


}

export namespace HierarchyType {


  export function BOAT(): HeirarchyEnum {
    return dcopy(boat);
  }

  export function LAWYER(): HeirarchyEnum {
    return dcopy(lawyer);
  }

  export function LECTURE(): HeirarchyEnum {
    return dcopy(lecture);
  }

  const boat = {
    id: 0,
    hasParent: false,
    hasChildren: true,
    displayName: 'Boat'
  }
  const lawyer = {
    id: 1,
    hasParent: true,
    hasChildren: true,
    displayName: 'Lawyer'
  }
  const lecture = {
    id: 2,
    hasParent: true,
    hasChildren: false,
    displayName: 'Lecture'
  }
}
