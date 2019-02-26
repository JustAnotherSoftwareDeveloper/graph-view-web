import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { HttpClient } from '@angular/common/http';
import { Gambler } from '../model/gambler';
import { BoatHierachy, LectureHierarchy } from '../model/entities';
import { HierarchyType, HeirarchyEnum } from '../model/hierarchy-type';
import { HierachyEntity } from '../model/hierachy-entity';

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {

  constructor(private http: HttpClient) { }


  private generateGambler() : Gambler {
    const id = faker.random.number(1000);
    const name = faker.finance.accountName();

    return {
      id: id,
      name: name
    }
  }

  private generateLecture(parent: HierachyEntity) : LectureHierarchy {

    const id = faker.random.number(1000);
    const type = HierarchyType.LECTURE;
    const name = faker.company.companyName();
    const description = faker.lorem.sentences(4);
    const denomination = faker.finance.currencyCode();
    const code = faker.company.companySuffix();
    const gamblers = Array.from({length: faker.random.number(10)}, () => this.generateGambler());

    return {
      id: id,
      hierarchyType: (type as any),
      children: [],
      parent: parent,
      denomination: denomination,
      code: code,
      name: name,
      description: description,
      gamblers: gamblers

    }
  }

}
