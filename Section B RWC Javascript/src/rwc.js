class RWC {
  constructor (new_year) {
    this.year = new_year
	this.all_my_teams = []
	this.all_my_pools = []
	this.all_my_venues = []
	this.all_my_matches = []
  }
  
	find_team (existing_team_name){
		let foundTeam, a_team
		foundTeam = null
		for (let a_team of this.all_my_teams) {
			if (a_team.name == existing_team_name) {
				foundTeam = a_team
				break
			}
		}
		return foundTeam
	}

	find_pool (pool_name){
		let foundPool, a_pool
		foundPool = null
		for (let a_pool of this.all_my_pools) {
			if (a_pool.name == pool_name) {
				foundPool = a_pool
				break
			}
		}
		return foundPool
	}
	add_team (new_name) {
	  let a_team = new Team(new_name)
	  this.all_my_teams.push(a_team)
	  return a_team
	}
	add_pool (new_name) {
	  let a_pool = new Pool(new_name)
	  this.all_my_pools.push(a_pool)
	  return a_pool
	}
	add_venue_if_new(new_venue_name, new_city){ 
		let a_venue = new Venue(new_venue_name, new_city)
		this.all_my_venues.push(a_venue)
		return a_venue
	}
	add_match(new_when, the_team_a, the_team_b, the_venue, the_pool){
	  let a_match = new Match(new_when, the_team_a, the_team_b, the_venue, the_pool)
	  this.all_my_matches.push(a_match)
	  return a_match

	}
	display_sorted_teams(){
        let result = '<br>'+ "Display_sorted_teams" + '<br>'
        this.all_my_teams.sort()
		for (let aTeam of this.all_my_teams){
			result += aTeam + '<br>'
		}
		return result
	}
	display_pools(){
		let result = '<br>'+ "display_pools" +'<br>'
		for (let aPool of this.all_my_pools){
			result += aPool + '<br>'
		}
		return result
	}
	display_teams_by_pool(){
		let result = '<br>'+ "display_teams_by_pool"
		for (let aPool of this.all_my_pools){
			result += '<br>' + aPool + '<br>'
			for (let existing_team_name of aPool.all_my_teams){
				result +=  existing_team_name + '<br>'
			}
		}
		return result
	}
	sort_by_date () {
		this.all_my_matches.sort(function (a, b) {
		  if (a.when < b.when) {
			return -1
		  }
		  if (a.when > b.when) {
			return 1
		  } // a must be equal to b
		  return 0
		})
	}	
	display_matches_by_date(){
        let result = '<br>'+ "display_matches_by_date" +'<br>'
        this.sort_by_date ()
		for (let aMatch of this.all_my_matches){
			result += aMatch + '<br>'
		}	
		return result
	}
	sort_by_venue () {
		this.all_my_matches.sort(function (a, b) {
		  if (a.the_venue.venue_name < b.the_venue.venue_name) {
			return -1
		  }
		  if (a.the_venue.venue_name > b.the_venue.venue_name) {
			return 1
		  } // a must be equal to b
		  return 0
		})
	}	
	display_matches_by_venue(){
        let result = '<br>'+ "display_matches_by_venue" +'<br>'
        this.sort_by_venue ()
		for (let aMatch of this.all_my_matches){
			result += aMatch + '<br>'
		}	
		return result
	}
	sort_by_team () {
		this.all_my_matches.sort(function (a, b) {
		  if (a.my_team_a < b.my_team_a) {
			return -1
		  }
		  if (a.my_team_a > b.my_team_a) {
			return 1
		  } // a must be equal to b
		  if (a.my_team_b < b.my_team_b) {
			return -1
		  }
		  if (a.my_team_b > b.my_team_b) {
			return 1
		  } // a must be equal to b
		  return 0
		})
	}
	display_matches_by_team(){
        let result = '<br>'+ "display_matches_by_team" +'<br>'
        this.sort_by_team ()
		for (let aMatch of this.all_my_matches){
			result += aMatch + '<br>'
		}	
		return result
	}
/* 	find_match(the_team_a ,the_team_b){
		for (let match of this.all_my_matches){
			if (match.my_team_a.name == the_team_a && match.my_team_b.name == the_team_b)
			}
	} */

	setResult(my_team_a, team_a_scores, team_a_tries, my_team_b, team_b_scores, team_b_tries){
/*         the_match = this.find_match(my_team_a, my_team_b)
        return */
	}
    toString () {
		let result = `RUGBY WORLD CUP ${this.year}` + '<br>'
		result += this.display_sorted_teams()
		result += this.display_pools()
		result += this.display_teams_by_pool()
		result += this.display_matches_by_date()
		result += this.display_matches_by_venue()
		result += this.display_matches_by_team()
		return result
	}
}
