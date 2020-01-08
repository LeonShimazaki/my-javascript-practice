class Match {
  constructor (new_when, new_the_team_a, new_the_team_b, new_the_venue, new_the_pool) {
	this.when = new_when
	this.my_team_a = new_the_team_a
	this.my_team_b = new_the_team_b
	this.the_venue = new_the_venue
	this.the_pool = new_the_pool
  }
  toString () {
    let result = `${this.the_pool} ${this.my_team_a} vs ${this.my_team_b} @ Location: ${this.the_venue}  ${this.when}`
    return result
  }
}