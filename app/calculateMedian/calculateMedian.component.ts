import { Component, Input } from '@angular/core';
import { TemperatureMonitor } from '../addTemperature/addTemperature.service.ts';

@Component({
  	selector: 'calculateMedian',
  	templateUrl: './app/calculateMedian/calculateMedian.component.html',
  	styleUrls: ['./src/assets/css/calculateMedian.component.css']
})

export class CalculateMedianComponent{
 		
  	constructor(private temperatureMonitor: TemperatureMonitor) {	
  	
		var meanResult:number="0";
		var medianResult:number="0";
		var rangeResult:number="0";
	
	}

    calculateMedian() {  	
 		
		var arr:number[] = this.temperatureMonitor.getCurrentMedian();
	
		Array.prototype.sort = Array.prototype.sort || function() {
			return this.sort((a,b)=>a-b);
		}
				
		Array.prototype.sum = Array.prototype.sum || function() {
  			return this.reduce(function(sum, arr) { return sum + Number(arr) }, 0);
		}
				
		Array.prototype.mean = Array.prototype.mean || function() {
  			return  this.sum()/(this.length || 1);
		}
	
		Array.prototype.min = Array.prototype.min || function () {
		   	return Math.min.apply(Math, this);
		}
		 
		Array.prototype.max = Array.prototype.max || function () {
		   	return Math.max.apply(Math, this);
		}
 
 		Array.prototype.median = Array.prototype.median || function () {
   			arr.sort();
   			var middle = Math.floor(arr.length / 2);
   			var isEven = arr.length % 2 === 0;
   			return isEven ? (parseInt(arr[middle]) + parseInt(arr[middle - 1])) / 2 : arr[middle];
		}

		this.meanResult 	= arr.mean();
		this.medianResult 	= arr.median();
		this.rangeResult 	= arr.max() - arr.min();	
  }
}