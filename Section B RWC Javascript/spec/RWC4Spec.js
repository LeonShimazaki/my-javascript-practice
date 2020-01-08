describe( "RWC assignment", function() {
    describe( "The 2019 Rugby World Cup Pool class", function() {
        var thePool
		beforeEach(function(){
			thePool = new Pool()
		})
		it( "should have an name property", function() {
            expect( thePool.hasOwnProperty('name')).toBeTruthy();
        }); 
		it( "should have an all_my_teams property", function() {
            expect( thePool.hasOwnProperty('all_my_teams')).toBeTruthy();
        }); 
		it( "should have an all_my_matches property", function() {
            expect( thePool.hasOwnProperty('all_my_matches')).toBeTruthy();
        }); 
		it( "should have an add_team method", function() {
            expect( thePool.add_team()).toBeDefined();
        }); 
		it( "should have an add_match method", function() {
            expect( thePool.add_match()).toBeDefined();
        }); 
		it( "should have an toString method", function() {
            expect( thePool.toString()).toBeDefined();
        }); 
	}); 
});