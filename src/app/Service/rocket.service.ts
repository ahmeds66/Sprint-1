import { Injectable } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { constractor } from '../model/constractor.model';
@Injectable({
  providedIn: 'root'
})
export class RocketService {
  //an array of rockets
  rockets: Rockets[];
  rocket! : Rockets;
  Const: constractor[];
  constructor() {
    this.Const = [
      {idC:1, nameC:"SpaceX"},
      {idC:2, nameC:"CASC"},
      {idC:3, nameC:"Lockheed Martin"},
      {idC:4, nameC:"Northrop Grumman"},
      {idC:5, nameC:"Arianespace"},
      {idC:6, nameC:"United Launch Alliance"},
      {idC:7, nameC:"Roscosmos"},
      {idC:8, nameC:"Virgin Orbit"}];

    this.rockets = [
      {id:1,name:"Falcon 1",constractor: {idC:1, nameC:"SpaceX"},lowOrbitPayload:670,highOrbitPayload:200,dateOfLaunch:new Date("2006-03-24"),numberOfLaunchs:5,fails:3},
      {id:2,name:"Falcon 9",constractor: {idC:1, nameC:"SpaceX"},lowOrbitPayload:228000,highOrbitPayload:83000,dateOfLaunch:new Date("2010-06-04"),numberOfLaunchs:182,fails:2},
      {id:3,name:"Falcon Heavy",constractor:{idC:1, nameC:"SpaceX"},lowOrbitPayload:638000,highOrbitPayload:267000,dateOfLaunch:new Date("2018-02-06"),numberOfLaunchs:3,fails:0},
      {id:4,name:"Long March 2F",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:8400,highOrbitPayload:0,dateOfLaunch:new Date("1999-11-19"),numberOfLaunchs:18,fails:0},
      {id:5,name:"Long March 3B",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:11500,highOrbitPayload:5500,dateOfLaunch:new Date("1996-12-01"),numberOfLaunchs:85,fails:4},
      {id:6,name:"Long March 4B",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:4200,highOrbitPayload:1500,dateOfLaunch:new Date("2000-12-01"),numberOfLaunchs:46,fails:1},
      {id:7,name:"Long March 5",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:25000,highOrbitPayload:6000,dateOfLaunch:new Date("2016-12-01"),numberOfLaunchs:8,fails:1},
      {id:8,name:"Long March 7",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:13500,highOrbitPayload:7000,dateOfLaunch:new Date("2016-06-25"),numberOfLaunchs:9,fails:1},
      {id:9,name:"Long March 9",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:150000,highOrbitPayload:50000,dateOfLaunch:new Date("2020-12-01"),numberOfLaunchs:0,fails:0},
      {id:10,name:"Long March 11",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:700,highOrbitPayload:350,dateOfLaunch:new Date("2015-09-25"),numberOfLaunchs:14,fails:0},
      {id:11,name:"Long March 11",constractor:{idC:2, nameC:"CASC"},lowOrbitPayload:700,highOrbitPayload:350,dateOfLaunch:new Date("2015-09-25"),numberOfLaunchs:14,fails:0},
      {id:12,name:"soyuz 2.1a",constractor:{idC:7, nameC:"Roscosmos"},lowOrbitPayload:7020,highOrbitPayload:2810,dateOfLaunch:new Date("2004-11-08"),numberOfLaunchs:149,fails:7},  
    ];
   }
   listRockets(){
     return this.rockets;
   }
    addRocket(rocket:Rockets){
      this.rockets.push(rocket);
    }
    deleteRocket(rock:Rockets){
      const index= this.rockets.indexOf(rock,0);
      if (index > -1){
        this.rockets.splice(index, 1);
      }
    }
    consultRocket(id:number): Rockets{ 
      this.rocket = this.rockets.find(r => r.id == id)!;
       return this.rocket; }
    updateRocket(r:Rockets){
      this.deleteRocket(r);
      this.addRocket(r);
      this.sortRockets();
    }
    sortRockets(){
      this.rockets = this.rockets.sort((n1,n2) => {
        if (n1.id! > n2.id!) {
          return 1;
        }
        if (n1.id! < n2.id!) {
          return -1;
        }
        return 0;
      });
    }

    listConst(): constractor[]{
      return this.Const;
    }
    consultConst(id:number): constractor{
      return this.Const.find(c => c.idC == id)!;
    }
    
    searchName(name:string): Rockets[]{
      return this.rockets.filter(r => r.name!.toLowerCase().includes(name.toLowerCase()));
    }
  }
