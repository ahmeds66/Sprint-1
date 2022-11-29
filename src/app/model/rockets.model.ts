import { constractor } from "./constractor.model";
export class Rockets { 
    id? : number; 
    name? : string;
    constractor! : constractor;
    lowOrbitPayload? : number; 
    highOrbitPayload? : number;
    dateOfLaunch? : Date ;
    numberOfLaunchs? : number;
    fails? : number;
}