

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
        
    }
    getAvailableSeatCount () {
        return this.capacity - this.passengers.length
    }   
    shouldQuarantine () {
        const shouldQuarantine = this.passengers.some(currentPassenger => currentPassenger.isHealthy === false)
        return shouldQuarantine
        
    }   
    join (traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    totalFood () {
        let totalFoods = 0
        for(let index = 0; index < this.passengers.length; index += 1){
           if(this.passengers[index].food > 0){
           totalFoods += this.passengers[index].food
           }
        }
        return totalFoods
    }
}

