describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with valid Starting And Ending City)",function(){
		expect(drivingRoute("New Delhi","Indore")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with Blank Starting City And valid Ending City)",function(){
		expect(drivingRoute(" ","Indore")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with valid Starting City And Blank Ending City)",function(){
		expect(drivingRoute("New Delhi"," ")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with Blank Starting And Ending City)",function(){
		expect(drivingRoute(" "," ")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with invalid Starting City And valid Ending City)",function(){
		expect(drivingRoute("dlfhaj","Indore")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with valid Starting City And invalid Ending City)",function(){
		expect(drivingRoute("New Delhi","bsakjafj")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Road (with invalid Starting And Ending City)",function(){
		expect(drivingRoute("abbvkaj","avnkja")).toBeUndefined();
	});
});