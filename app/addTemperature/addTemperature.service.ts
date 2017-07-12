import {Injectable} from "@angular/core";

@Injectable()
export class TemperatureMonitor{

    constructor(){}
    
    public serviceArray:number[] = [];
    
    recordTemperature(elementArray){
        this.serviceArray.push(elementArray);
    }

	updateTemperature(elementArray){
        let element = this.serviceArray.indexOf(elementArray);
        this.serviceArray.splice(element,1);
    }
    
  	getCurrentMedian(){
        return this.serviceArray;
    }
}