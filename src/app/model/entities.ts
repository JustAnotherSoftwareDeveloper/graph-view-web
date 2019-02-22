
import { HierachyEntity, EntityWithDenomination } from "./hierachy-entity";
import {HierarchyType} from './hierarchy-type';
export interface BoatHierachy extends HierachyEntity {
  hierarchyType: HierarchyType.BOAT;

  parent: null;
}

export interface LawyerHierarchy extends EntityWithDenomination {
  hierarchyType: HierarchyType.LAWYER;
}

export interface LectureHierarchy extends EntityWithDenomination {
  hierarchyType: HierarchyType.LECTURE;

  children: [];
}

