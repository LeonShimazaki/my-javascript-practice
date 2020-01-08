describe( "RWC assignment", function() {
    describe( "The 2019 Rugby World Cup RWC class Methods", function() {
        var theRWC
		beforeEach(function(){
			theRWC = Controller.setup()
		})
		it( "should have an find_team method", function() {
            expect( theRWC.find_team()).toBeDefined();
        }); 
		it( "should have an find_pool method", function() {
            expect( theRWC.find_pool()).toBeDefined();
        }); 
		it( "should have an add_team method", function() {
            expect( theRWC.add_team()).toBeDefined();
        }); 
		it( "should have an add_pool method", function() {
            expect( theRWC.add_pool()).toBeDefined();
        }); 
		it( "should have an add_venue_if_new method", function() {
            expect( theRWC.add_venue_if_new()).toBeDefined();
        }); 
		it( "should have an add_match method", function() {
            expect( theRWC.add_match()).toBeDefined();
		});
	}); 
});