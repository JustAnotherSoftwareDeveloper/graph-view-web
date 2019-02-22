import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { HttpClient } from '@angular/common/http';
import { Gambler } from '../model/gambler';
import { BoatHierachy } from '../model/entities';

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

  private generateUnlinkBoat() : BoatHierachy {
    
  }

}
