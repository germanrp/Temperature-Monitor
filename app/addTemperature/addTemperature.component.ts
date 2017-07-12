import { Component, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { TemperatureMonitor } from './addTemperature.service.ts';


@Component({
  	moduleId: module.id,
  	selector: 'add-temperature',
  	templateUrl: './addTemperature.component.html',
  	styleUrls: ['../../src/assets/css/addTemperature.component.css']
})

export class AddTemperatureComponent {

	public currentPercentage: number = 0;
    formText: string = "";
    submitted = false;
    showError = false;
    
  	onSubmit() { this.submitted = true; }
	
  	constructor(private temperatureMonitor: TemperatureMonitor) {	
    	this.recipients = [];
    	var errorMessage:string = "";
    	this.errorMessagesAvailable = {	STACKFULL	: "The stack is full",
  										CLEAN		: "",
  										REQUIRED	: "Value is required",
  										ONLYNUMBERS : "Value should be only numbers"
									  };
		this.regexPattern = new RegExp('(^-?0\.[0-9]*[1-9]+[0-9]*$)|(^-?[1-9]+[0-9]*((\.[0-9]*[1-9]+[0-9]*$)|(\.[0-9]+)))|(^-?[1-9]+[0-9]*$)|(^0$){1}');

  	}
	
	

  	addRecipient(recipient) {  	
  	
  		if (this.recipients.length < 8) {

  			if (recipient) { 
  			
  				if (this.regexPattern.test(recipient)) {
  				
  					this.recipients.push(recipient);
		    		this.temperatureMonitor.recordTemperature(recipient);
		 
			    	// Updating ProgressBar
			        this.currentPercentage = (100/8)* Number(this.recipients.length);
			        
			        // Cleaning up error messages if any
			        this.errorMessage = this.errorMessagesAvailable.CLEAN;
			        this.showError = false;
			        document.getElementById("myIndex").value = "";
			        
  				} else { 
	  				// Don't insert any element and send error message
		  			this.showError = true;
		  			this.errorMessage = this.errorMessagesAvailable.ONLYNUMBERS;
	  			}
  					
  			} else {
  				// Don't insert any element and send error message
	  			this.showError = true;
	  			this.errorMessage = this.errorMessagesAvailable.REQUIRED;
  			}
  			
  		} else {
  			// Don't insert any element and send error message
  			this.showError = true;
  			this.errorMessage = this.errorMessagesAvailable.STACKFULL;
  		}

  	}
  
    removeRecipient(recipient){
    
    	let index = this.recipients.indexOf(recipient);
        this.recipients.splice(index,1);
        
        if (this.errorMessage != "") { 
        	this.errorMessage = this.errorMessagesAvailable.CLEAN; 
        	this.showError = false;
        }
        
        this.temperatureMonitor.updateTemperature(recipient);
        
        // Updating ProgressBar
        this.currentPercentage = (100/8)* Number(this.recipients.length);
    }
}
