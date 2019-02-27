import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { HttpClient } from '@angular/common/http';
import { Gambler } from '../model/gambler';
import { BoatHierachy, LectureHierarchy, LawyerHierarchy } from '../model/entities';
import { HierarchyType, HeirarchyEnum } from '../model/hierarchy-type';
import { HierachyEntity } from '../model/hierachy-entity';
import { Observable, of } from 'rxjs';
import createIpsum from 'corporate-ipsum';
import forcem from 'forcem-ipsum';
import * as metalName from 'metal-name';
import generateRandomName from 'pirate-name-generator';
import { generateParagraphs, Mode } from 'samuel-ipsum'
import jeffsum from 'jeffsum';
@Injectable({
  providedIn: 'root'
})
export class HierarchyService {

  constructor(private http: HttpClient) { }


  public getHeirarchy(id: number) : Observable<HierachyEntity> {
    return of(this.generateBoatHeirarchy(7));
  }

  private generateGambler() : Gambler {
    const id = faker.random.number(1000);
    const name = generateRandomName();
    const description = jeffsum(5);
    return {
      id: id,
      name: name,
      description: description
    }
  }

  private generateHierarchy(type: any, parent: HierachyEntity, numChildren: number) : HierachyEntity {
    const id = faker.random.number(1000);
    const name = metalName();
    const description = createIpsum(25);
    const code = faker.finance.account();
    const gamblers = Array.from({length: faker.random.number({min: 2, max: 15})}, () => this.generateGambler());

    const hierachy =
    {
      id: id,
      hierarchyType: type,
      children: [],
      parent: parent,
      code: code,
      name: name,
      description: description,
      gamblers: gamblers
    }
    const children = numChildren > 0 ? Array.from({length: numChildren}, () => this.generateChild(hierachy, numChildren-1)) : [];
    hierachy.children = children;
    return hierachy;
  }
  private generateLawyerHeirarchy(parent: HierachyEntity, numChildren: number) : LawyerHierarchy {

    const denomination = faker.finance.currencyCode();
    const hierachy : HierachyEntity = this.generateHierarchy(HierarchyType.LAWYER(), parent, numChildren);
    (hierachy as LawyerHierarchy).denomination = denomination;
    return hierachy as LawyerHierarchy

  }

  private generateBoatHeirarchy(numChildren: number) : BoatHierachy {
    return this.generateHierarchy(HierarchyType.BOAT(), null, numChildren) as BoatHierachy
  }

  private generateLecture(parent: HierachyEntity) : LectureHierarchy {


    const denomination = faker.finance.currencyCode();
    const hierachy = this.generateHierarchy(HierarchyType.LECTURE(), parent, 0);
    (hierachy as LectureHierarchy).denomination = denomination;
    return hierachy as LectureHierarchy
  }

  private generateChild(parent: HierachyEntity, numChildren: number) : HierachyEntity {
      return ( numChildren == 0 || faker.random.number() % 3 == 0) ? this.generateLecture(parent) : this.generateLawyerHeirarchy(parent, numChildren)
  }

}
