describe( "RWC assignment", function() {
    describe( "The 2019 Rugby World Cup Match class", function() {
        var theMatch
		beforeEach(function(){
			theMatch = new Match()
		})
		it( "should have an when property", function() {
            expect( theMatch.hasOwnProperty('when')).toBeTruthy();
        }); 
		it( "should have an my_team_a property", function() {
            expect( theMatch.hasOwnProperty('my_team_a')).toBeTruthy();
        }); 
		it( "should have an my_team_b property", function() {
            expect( theMatch.hasOwnProperty('my_team_b')).toBeTruthy();
        }); 
		it( "should have an the_venue property", function() {
            expect( theMatch.hasOwnProperty('the_venue')).toBeTruthy();
        }); 
		it( "should have an the_pool property", function() {
            expect( theMatch.hasOwnProperty('the_pool')).toBeTruthy();
        }); 
		it( "should have an toString method", function() {
            expect( theMatch.toString()).toBeDefined();
        }); 
	}); 
});