import { HeirarchyEnum } from "./hierarchy-type";
import { Gambler } from "./gambler";

export interface HierachyEntity {

  id: number;
  hierarchyType: HeirarchyEnum;

  parent: HierachyEntity;

  children: HierachyEntity[];

  code: string;

  description: string;

  gamblers: Gambler[];

  name: string;
}


export interface EntityWithDenomination extends HierachyEntity {
    denomination: string;
}
