describe( "RWC assignement", function() {
    describe( "The 2019 Rugby World Cup Venue class", function() {
        var theVenue
		beforeEach(function(){
			theVenue = new Venue()
		})
		it( "should have an venue_name property", function() {
            expect( theVenue.hasOwnProperty('venue_name')).toBeTruthy();
        }); 
		it( "should have an city property", function() {
            expect( theVenue.hasOwnProperty('city')).toBeTruthy();
        }); 
		it( "should have an toString method", function() {
            expect( theVenue.toString()).toBeDefined();
        }); 
	}); 
});