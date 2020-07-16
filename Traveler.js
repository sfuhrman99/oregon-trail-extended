
class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }   
    eat () {
        this.food -= 1
        if (this.food < 1) {
            this.isHealthy = false
        }
    }   
}