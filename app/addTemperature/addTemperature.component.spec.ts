import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddTemperatureComponent } from './addTemperature.component.ts';
import { TemperatureMonitor } from './addTemperature.service.ts';

describe('AddTemperatureComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddTemperatureComponent ],
            providers:    [ TemperatureMonitor ]
    	}).compileComponents();
  	}));
    
    it('should create the AddTemperature component', async(() => {
		
 		fixture = TestBed.createComponent(AddTemperatureComponent);
  		comp    = fixture.componentInstance;  
	    expect(comp).toBeTruthy();
	  }));
});