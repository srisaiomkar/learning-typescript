import faker from 'faker';
import { Mappable } from './Mappable';

export class Company implements Mappable{
  name: string;
  location:{
    lat: number,
    lng: number
  }

  constructor(){
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `<div>
              <h3>Company name: ${this.name}</h3>
            </div>
          `
  }
}