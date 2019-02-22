import { HeirarchyEnum } from "./hierarchy-type";
import { Gambler } from "./gambler";

export interface HierachyEntity {

  id: number;
  heirachyType: HeirarchyEnum;

  parent: HierachyEntity;

  children: HierachyEntity[];

  code: string;

  description: string;

  gamblers: Gambler[];
}


export interface EntityWithDenomination extends HierachyEntity {
    denomination: string;
}
