
import { HierachyEntity, EntityWithDenomination } from "./hierachy-entity";
import {HierarchyType} from './hierarchy-type';
export interface BoatHierachy extends HierachyEntity {

  parent: null;
}

export interface LawyerHierarchy extends EntityWithDenomination {
}

export interface LectureHierarchy extends EntityWithDenomination {
  children: [];
}

