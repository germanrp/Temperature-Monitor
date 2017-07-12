import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculateMedianComponent } from './calculateMedian.component.ts';
import { TemperatureMonitor } from '../addTemperature/addTemperature.service.ts';

describe('CalculateMedianComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculateMedianComponent
      ],
      providers:[
      	TemperatureMonitor
      ]
    }).compileComponents()
      .then(() => {
            fixture = TestBed.createComponent(CalculateMedianComponent);
            comp = fixture.componentInstance;
        });
  }));

  it('should create the CalculateMedian component', async(() => {
    const fixture = TestBed.createComponent(CalculateMedianComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

	describe("Acceptance Criteria and Definition of Done", function() {
    var arr;
    var arr2;
 
    // This will be called before running each spec
    beforeEach(function() {
    	arr = [5, 1, -7, 7, 8, 3];
    	arr2 = [5, 1, -7, 7, 8, 3, 9];
    });
 
    describe("Performing sample data and expected result from README", function(){
         
        // Spec for sum operation
        it("should be able to calculate sum of array [5, 1, -7, 7, 8, 3]", function() {
            expect(arr.sum()).toEqual(15);
        });
        
        // Spec for median operation
        it("should be able to calculate median of array [5, 1, -7, 7, 8, 3]", function() {
            expect(arr.median()).toEqual(4);
        });
        
        // Spec for median operation
        it("should be able to calculate sum of array [5, 1, -7, 7, 8, 3, 9]", function() {
            expect(arr2.median()).toEqual(5);
        });
         
    });
    
    
});

});