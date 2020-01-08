describe( "RWC assignment", function() {
    describe( "The 2019 Rugby World Cup Team class", function() {
        var theTeam
		beforeEach(function(){
			theTeam = new Team()
		})
		it( "should have an name property", function() {
            expect( theTeam.hasOwnProperty('name')).toBeTruthy();
        }); 
		it( "should have an toString method", function() {
            expect( theTeam.toString()).toBeDefined();
        }); 
	}); 
});