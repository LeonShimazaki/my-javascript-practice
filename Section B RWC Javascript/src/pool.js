class Pool {
  constructor (new_name) {
    this.name = new_name
	this.all_my_teams = []
	this.all_my_matches = []
  }
  add_team(a_team) {
	  this.all_my_teams.push(a_team)
  }
  add_match(a_match){
	  this.all_my_matches.push(a_match)
  }
  toString () {
    let result = `Pool ${this.name}`
    return result
  }
}