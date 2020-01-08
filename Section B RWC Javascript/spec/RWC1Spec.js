describe( "RWC assignement", function() {
    describe( "The 2019 Rugby World Cup RWC class", function() {
        var theRWC
		beforeEach(function(){
			theRWC = Controller.setup()
		})
		it( "should have an year property", function() {
            expect( theRWC.hasOwnProperty('year')).toBeTruthy();
        }); 
		it( "should have an year property of 2019", function() {
            expect( theRWC.year).toBe(2019);
        }); 
		it( "should have an toString method", function() {
            expect( theRWC.toString()).toBeDefined();
        }); 
	}); 
});