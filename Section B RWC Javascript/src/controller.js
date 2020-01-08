class Controller {

  static setup () {
    console.log(rwc_json)
    var rwc = new RWC(2019)
    let team_names = rwc_json["teams"]
        
    for (let new_name of team_names) {
        console.log(new_name)
        rwc.add_team(new_name)
    }

    console.log(Object.keys(rwc_json["pools"]))
    
    for (let new_name of Object.keys(rwc_json["pools"])) {
        console.log(new_name)
        let a_pool = rwc.add_pool(new_name)
        for (let existing_team_name of rwc_json["pools"][new_name]) {
            console.log('\t', existing_team_name)
            let a_team = rwc.find_team(existing_team_name)
            a_pool.add_team(a_team)
      }
	}
    for (let match of rwc_json["round-robin"]) {
        let pool_name = match['pool']
        let the_pool = rwc.find_pool(pool_name)
        let new_when = new Date(match['when'])
		let	date = JSON.stringify(new_when)
			date = date.slice(1,11)
			new_when = date
        let existing_team_a_name = match['team_a']
        let existing_team_b_name = match['team_b']
        let venue_name = match['venue']
        let city = match['city']
        console.log(new_when, existing_team_a_name, existing_team_b_name, venue_name, city)
        let the_team_a = rwc.find_team(existing_team_a_name)
        let the_team_b = rwc.find_team(existing_team_b_name)
        let the_venue = rwc.add_venue_if_new(venue_name, city)
        let a_match = rwc.add_match(new_when, the_team_a, the_team_b, the_venue, the_pool)
        the_pool.add_match(a_match)
    }
	rwc.setResult('Russia', 10, 1, 'Japan', 30, 4)
	rwc.setResult('Ireland', 27, 4, 'Scotland', 3, 0)
	rwc.setResult('England', 35, 4, 'Tonga', 3, 0)
	rwc.setResult('Russia', 9, 0, 'Samoa', 34, 6)
	rwc.setResult('Japan', 19, 1, 'Ireland', 12, 2)
	rwc.setResult('Scotland', 34, 2, 'Samoa', 0, 0)
	rwc.setResult('Ireland', 35, 5, 'Russia', 0, 0)
	rwc.setResult('Japan', 38, 4, 'Samoa', 19, 1)
	rwc.setResult('Scotland', 61, 9, 'Russia', 0, 0)
	rwc.setResult('Ireland', 47, 7, 'Samoa', 5, 1)
	rwc.setResult('Japan', 28, 4, 'Scotland', 21, 3)

	rwc.setResult('New Zealand', 23, 2, 'South Africa', 13, 1)
	rwc.setResult('Italy', 47, 6, 'Namibia', 22, 3)
	rwc.setResult('Italy', 48, 6, 'Canada', 7, 1)
	rwc.setResult('South Africa', 57, 9, 'Namibia', 3, 0)
	rwc.setResult('New Zealand', 63, 8, 'Canada', 0, 0)
	rwc.setResult('South Africa', 49, 7, 'Italy', 3, 0)
	rwc.setResult('New Zealand', 71, 11, 'Namibia', 9, 0)
	rwc.setResult('South Africa', 66, 10, 'Canada', 7, 1)
	rwc.setResult('New Zealand', 0, 0, 'Italy', 0, 0) //!
	rwc.setResult('Namibia', 0, 0, 'Canada', 0, 0) //!


	rwc.setResult('France', 23, 2, 'Argentina', 21, 2)
	rwc.setResult('England', 35, 4, 'Tonga', 3, 0)
	rwc.setResult('England', 45, 6, 'United States', 7, 1)
	rwc.setResult('Argentina', 28, 4, 'Tonga', 12, 2)
	rwc.setResult('France', 33, 5, 'United States', 9, 0)
	rwc.setResult('England', 39, 6, 'Argentina', 10, 1)
	rwc.setResult('France', 23, 2, 'Tonga', 21, 3)
	rwc.setResult('Argentina', 47, 7, 'United States', 17, 3)
	rwc.setResult('England', 0, 0, 'France', 0, 0) //!
	rwc.setResult('United States', 19, 3, 'Tonga', 31, 4)

	rwc.setResult('Australia', 39, 6, 'Fiji', 21, 2)
	rwc.setResult('Wales', 43, 6, 'Georgia', 14, 2)
	rwc.setResult('Fiji', 27, 5, 'Uruguay', 30, 3)
	rwc.setResult('Georgia', 33, 5, 'Uruguay', 7, 1)
	rwc.setResult('Australia', 25, 3, 'Wales', 29, 2)
	rwc.setResult('Georgia', 10, 1, 'Fiji', 45, 7)
	rwc.setResult('Australia', 45, 3, 'Uruguay', 10, 1)
	rwc.setResult('Wales', 29, 4, 'Fiji', 17, 2)
	rwc.setResult('Australia', 27, 4, 'Georgia', 8, 1)
	rwc.setResult('Wales', 35, 4, 'Uruguay', 13, 1)
    return rwc
  }
  //console.log(rwc.display_teams)
}