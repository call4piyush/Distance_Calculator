describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with valid Starting And Ending City)",function(){
		expect(distance("New Delhi","Indore")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with Blank Starting City And valid Ending City)",function(){
		expect(distance(" ","Indore")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with valid Starting City And Blank Ending City)",function(){
		expect(distance("New Delhi"," ")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with Blank Starting And Ending City)",function(){
		expect(distance(" "," ")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with invalid Starting City And valid Ending City)",function(){
		expect(distance("fkhfkjhdk","Indore")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with valid Starting City And invalid Ending City)",function(){
		expect(distance("New Delhi","snflksjf;")).toBeUndefined();
	});
});
describe("Distance Calculator", function(){  
	it("Should Calculate distance By Air (with invalid Starting And Ending City)",function(){
		expect(distance("shgfhs","fbskajfb")).toBeUndefined();
	});
});