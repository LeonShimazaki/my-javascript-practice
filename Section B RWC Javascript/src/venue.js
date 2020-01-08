class Venue {
  constructor (new_venue_name, new_city) {
    this.venue_name = new_venue_name
    this.city = new_city
  }
  toString () {
    let result = `${this.venue_name} ${this.city}`
    return result
  }
}